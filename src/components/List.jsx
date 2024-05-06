 import '../App.css';
 import "./News.css";

  export default function List({data}) {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {data.map((post) => (
                 <div className="max-w-sm rounded overflow-hidden shadow-lg">
                 

                 <div className="px-6 py-4">
                   <a href={post.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
          <h5 className="font-bold text-lg">{post.title}</h5>
        </a>
 
                   <div className="text-gray-700 text-base">
                     {post.description}
                    
                     <a href={post.url} target="_blank" rel="noopener noreferrer" className="hover:underline">Read More.....

          </a>
                   </div>
                 </div>
                 <img src={post.urlToImage} alt={post.title} className="object-cover" />

               </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  