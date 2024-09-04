import React from "react";

const Blog = () => {
  return (
    <>
      <section className="bg-Pattern bg-cover p-4 md:p-10 ">
        <div className=" ">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 pt-10">
              <div className="mx-auto text-center font-bold  text-red text-5xl uppercase lg:mb-20">
                <h2 className="mb-4 text-3xl font-bold text-dark  sm:text-4xl md:text-[40px]">
                  Our Blogs
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam sit, odio, numquam ipsa eaque quos vero eum dolores nemo temporibus maiores amet velit quia atque quae iure nesciunt tempore autem!
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap">
            <BlogCard
              CardTitle="Shivan Idols Bronze Statue- hindu goddess of knowledge"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://api.shriworkscraft.com/uploads/ganesha_statue_cf533b6df9.webp"
            />
            <BlogCard
              CardTitle="Shivan Idols Bronze Statue- hindu goddess of knowledge"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://api.shriworkscraft.com/uploads/Taajoo_df1916308c.png"
            />
            <BlogCard
              CardTitle="Shivan Idols Bronze Statue- hindu goddess of knowledge"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://api.shriworkscraft.com/uploads/website_banner_11_e95e90137e.webp"
            />
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Shivan Idols Bronze Statue- hindu goddess of knowledge"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://api.shriworkscraft.com/uploads/Taajoo_df1916308c.png"
            />
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Shivan Idols Bronze Statue- hindu goddess of knowledge "
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://api.shriworkscraft.com/uploads/ganesha_statue_cf533b6df9.webp"
            />
            <BlogCard
              CardTitle="Shivan Idols Bronze Statue- hindu goddess of knowledge"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://api.shriworkscraft.com/uploads/website_banner_11_e95e90137e.webp"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

const BlogCard = ({ image, CardTitle, CardDescription }) => {
  return (
    <>
      <div className="w-full p-2 mx-2 ">
        <div className="mb-10 flex flex-row gap-2 w-full hover:shadow-xl shadow-md cursor-pointer rounded-md transition-all bg-yellow  duration-300 p-4 hover:shadow-red">
          <div className=" overflow-hidden w-2/4 rounded">
            <img src={image} alt="" className="w-full h-72 object-cover" />
            <h3>
              <div
                className=" inline-block mb-2 h-24 shrink-0 text-md my-2 font-semibold text-red uppercase lg:text-xl  xl:text-2xl"
              >
                {CardTitle}
              </div>
            </h3>
          </div>
          <div className="w-2/4">
            <p className=" bg-black rounded-md h-[26rem] bg3 text-yellow  shadow-md  p-2 overflow-y-auto" >
              {CardDescription}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
