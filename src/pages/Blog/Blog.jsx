import React from "react";
import { useQuery } from "react-query";
import api from "../../Utils/api";
const baseUrl = api.defaults.baseURL;
const Blog = () => {

const getBlog = async() =>{
  const res = await api.get('/api/blogs?populate=*')
  return res.data.data;
}

const {data:blogData} = useQuery('GetBlog', getBlog);

  return (
    <>
      <section className=" bg-cover p-4 md:p-10 ">
        <div className=" ">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 pt-10">
              <div className="mx-auto text-center font-bold  text-red text-5xl uppercase lg:mb-20">
                <h2 className="mb-4 text-3xl font-bold text-dark  sm:text-4xl md:text-[40px]">
                  Our Blogs
                </h2>
                <p className="text-base sm:flex hidden text-body-color dark:text-dark-6">
                Shriworks' blog showcases a wide range of content, including idols, pooja items, and temple-related products, reflecting the essence of traditional spiritual practices. It's a space where devotees can explore and learn about various sacred offerings and artifacts.
                </p>
              </div>
            </div>
          </div>
          <div  className="-mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap">
          {blogData?.map((blog,index)=>(
            <div key={index}>
              <BlogCard
                CardTitle={blog?.attributes?.Title}
                CardDescription={blog?.attributes?.Description || []}
                image={`${baseUrl}/${blog?.attributes?.Image?.data.attributes.url}`}
              />
              </div>
              ))}

            </div>

        </div>
      </section>
    </>
  );
};

export default Blog;

const BlogCard = ({ image, CardTitle, CardDescription }) => {

  const extractText = (description) => {
    return description
      ?.map((paragraph) =>
        paragraph?.children?.map((child) => child?.text).join(" ")
      )
      .join("\n"); // Join paragraphs with a newline or space
  };

  return (
    <>
      <div className="w-full p-2 mx-2 ">
        <div className="mb-10 flex flex-row gap-2 w-full hover:shadow-xl shadow-md cursor-pointer rounded-md transition-all bg-[#fceecf]  duration-300 p-4 hover:shadow-red">
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
              {extractText(CardDescription)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
