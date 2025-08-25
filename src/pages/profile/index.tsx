import { memo } from "react";
import avatar from "../../assets/avatar.webp";
import { useUser } from "../../api/hooks/useUser";

const Profile = () => {
  const { getUser } = useUser();
  const { data } = getUser();

  if (!data) return <p>Yuklanmoqda...</p>;

  const { uploadImage } = useUser();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const formData = new FormData();
      formData.append("file", e.target.files[0]); 
      uploadImage.mutate(formData);
    }
  };

  return (
    <section>
      <div className="container max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Profil ma'lumotlari
        </h2>

        <div className="flex items-center gap-6">
          <div className="basis-1/3 flex justify-center">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-300 shadow-md">
              <img src={avatar} alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="basis-2/3">
            <ul className=" text-lg">
              <li>
                <strong>Ism Familiya:</strong> {data.full_name}
              </li>
              <li>
                <strong>Email:</strong> {data.email}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <input type="file" onChange={handleFileChange} />
      </div>
    </section>
  );
};

export default memo(Profile);
