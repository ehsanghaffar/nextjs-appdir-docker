"use client"
import { CheckIcon } from "@heroicons/react/24/solid";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../../components/ui/Button";
import { IRecipCreate, Ingredients } from "../../../models/recipe";

let nextId = 0;

// تعریف کامپوننت CreateRecipe
export default function CreateRecipe() {
  // استفاده از useState برای تعریف و مدیریت وضعیت های مورد نیاز
  const [recipe, setRecipe] = useState<IRecipCreate>({
    name: "",
    description: "",
    ingredients: [],
    photo: null,
    steps: "",
  });
  const [singleIngredient, setSingleIngredient] = useState("");
  const [ingredients, setIngredients] = useState<Ingredients[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<File | null>(null);
  const [loading, setLoading] = useState(true)

  // تابع handlePhotoChange برای مدیریت تغییرات در ورودی عکس
  const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedPhoto(file);
    }
  };

  // تابع handleAddIngredient برای اضافه کردن ماده اولیه جدید به لیست مواد اولیه
  function handleAddIngredient() {
    const insertAt = 1; // می‌تواند هر شاخصی باشد
    const nextIngredients = [
      // موارد قبل از شاخص درج:
      ...ingredients.slice(0, insertAt),
      // ماده اولیه جدید:
      { id: nextId++, name: singleIngredient },
      // موارد بعد از شاخص درج:
      ...ingredients.slice(insertAt),
    ];
    console.log("next", nextIngredients);

    setIngredients(nextIngredients);
    setSingleIngredient("");
  }

  // تابع saveRecipe برای ارسال داده‌ها به سرور و ذخیره رسپی جدید
  const saveRecipe = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true)
    if (selectedPhoto) {
      const formData = new FormData();
      formData.append("photo", selectedPhoto);
      formData.append("name", recipe.name);
      formData.append("description", recipe.description);
      formData.append("ingredients", JSON.stringify(ingredients));
      formData.append("steps", recipe.steps);

      const options = {
        method: "POST",
        body: formData,
      };
      try {
        const saveRecip = await fetch("/api/recipes", options);
        setLoading(false)
        if (saveRecip.status === 200) {
          console.log(saveRecip);
        }
      } catch (error) {
        setLoading(false)
        console.log(error);
      }
    }
  };

  // بخش رابط کاربری کامپوننت CreateRecipe
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex flex-col gap-6">
          <section className="p-10">
            <div className="bg-white">
              <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                  <span className="text-gray-600">
                    اضافه کردن رسپی جدید
                  </span>
                  {/* <span className="block text-indigo-500">
                  </span> */}
                </h2>
              </div>
            </div>

            <form
              onSubmit={saveRecipe}
              className="grid grid-cols-1 gap-6 items-center justify-items-center border rounded p-10"
            >
              <div className="w-96">
                <input
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 border"
                  value={recipe.name}
                  name="name"
                  onChange={(e) =>
                    setRecipe({ ...recipe, name: e.target.value })
                  }
                  placeholder="اسم رسپی"
                  required
                />
              </div>
              <div className="w-96">
                <textarea
                  placeholder="توضیحات"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm border focus:border-blue-500 focus:ring-blue-500"
                  name="description"
                  onChange={(e) =>
                    setRecipe({ ...recipe, description: e.target.value })
                  }
                  required
                ></textarea>
              </div>
              <div className="w-96">
                <textarea
                  placeholder="طرز پخت"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm border focus:border-blue-500 focus:ring-blue-500"
                  name="steps"
                  value={recipe.steps}
                  onChange={(e) =>
                    setRecipe({ ...recipe, steps: e.target.value })
                  }
                  required
                ></textarea>
              </div>
              <div className="w-96 flex gap-2">
                <input
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 border"
                  value={singleIngredient}
                  name="name"
                  onChange={(e) => setSingleIngredient(e.target.value)}
                  placeholder="مواد اولیه"
                />
                <button
                  type="button"
                  className="px-0 w-36 py-1 bg-blue-500 rounded text-white text-sm"
                  onClick={handleAddIngredient}
                >
                  اضافه کن
                </button>
              </div>
              <div className="w-96">
                <ul className="space-y-3 text-sm">
                  {ingredients.map((ingredient) => (
                    <li
                      className="flex space-x-3 gap-2 items-center"
                      key={ingredient.id}
                    >
                      <CheckIcon
                        className="flex-shrink-0 h-6 w-6 text-blue-600"


                        width={20}
                      />
                      <span className="text-gray-800 dark:text-gray-600">
                        {ingredient.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-96">
                <label className="block">
                  <span className="sr-only">یک عکس انتخاب کن</span>
                  <input
                    type="file"
                    name="photo"
                    onChange={handlePhotoChange}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
                  />
                </label>
              </div>
              <div className="w-full text-center">
                <Button
                  type="submit"
                  className="w-96 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-cyan-700 text-white hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-all text-sm"
                >
                  <span>ساخت رسپی</span>
                </Button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}
