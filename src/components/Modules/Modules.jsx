import React, { useEffect, useState } from 'react'
import m1 from "../../assets/website/module1.jpg";
import m2 from "../../assets/website/module2.jpg";
import m3 from "../../assets/website/module3.jpg";
import m4 from "../../assets/website/module4.jpg";
import m5 from "../../assets/website/module5.jpeg";
import m6 from "../../assets/website/module6.jpg";
import { useParams } from 'react-router-dom';

import { db } from '../../firebase/firebase';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';


const modules = [
  {
    id: 1,
    name: "Module 1",
    description: "Description of Module 1",
    image: m1
  },
  {
    id: 2,
    name: "Module 2",
    description: "Description of Module 2",
    image: m2
  },
  {
    id: 3,
    name: "Module 3",
    description: "Description of Module 3",
    image: m3
  },
  {
    id: 4,
    name: "Module 4",
    description: "Description of Module 3",
    image: m4
  },
  {
    id: 5,
    name: "Module 5",
    description: "Description of Module 3",
    image: m5
  },
  {
    id: 6,
    name: "Module 6",
    description: "Description of Module 3",
    image: m6
  },

];

const Modules = () => {

  const [moduleData, setModuleData] = useState([])
  const [loading, setLoading] = useState(true)
  let fetchDataDoc, collType;

  const params = useParams();

  if (params.name == "Semester 1") {
    fetchDataDoc = "semester 1";
    collType = "physics 1";
  }
  else {
    fetchDataDoc = "semester 2";
    collType = "physics 2";
  }
  // console.log(params)//Semester 1 or Semester 2


  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const docRef = collection(db, 'modules', fetchDataDoc, collType);
        const snapshot = await getDocs(docRef);
        const data = snapshot.docs.map(doc => ({ ...doc.data() }))

        if (data.length != 0) {

          setModuleData([...data]);
          console.log(moduleData)  //set data of firestore if exist

        } else {
          console.log('No such document!');
          //raise error
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDocument();
  }, []);

  if (loading) {
    return (
      <div className='w-full max-h-screen min-h-svh flex justify-center items-center'>
        <div className="loader border-t-2 rounded-full border-gray-500 bg-gray-300 animate-spin
aspect-square w-8 flex justify-center items-center text-yellow-700"></div>
      </div>
    )
  }

  return (
    <div >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 m-4 sm:m-10">
        {modules.map(module => (
          <div key={module.id} className=" rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="overflow-hidden h-48">
              <img className="rounded-t-lg w-full h-full object-cover transform transition-transform duration-300 hover:scale-110" src={module.image} alt={module.name} />
            </div>
            <div className="p-5 sm:pt-5 sm:pb-2">
              <h5 className=" mb-2 text-lg sm:text-2xl md:text-2xl font-bold tracking-tight font-cursive text-primary">{module.name}</h5>
              <p className="mb-3 text-sm sm:text-base font-normal ">{module.description}</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm mb-4 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                View Notes  ▶
              </a>
            </div>
          </div>
        ))}
      </div>
      <>
        {
          moduleData.map((item, index) => (
            <>
            <h1>{item.Name}</h1>
            <span>{item.Description}</span>
            </>
          ))
        }

      </>


    </div>

  )
}

export default Modules





// <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 m-4 sm:m-10">
//     {modules.map(module => (
//         <div key={module.id} className="flip-container bg-gray-800 rounded-lg shadow-2xl overflow-hidden border border-gray-100 w-full sm:w-auto">
//             <div className="flip-card">
//                 <div className="flip-card-front">
//                     <div className="overflow-hidden h-40">
//                         <img className="rounded-t-lg w-full h-full object-cover" src={module.image} alt={module.name} />
//                     </div>
//                     <div className="p-3 sm:pt-3 sm:pb-2">
//                         <h5 className="mb-2 text-lg sm:text-xl md:text-2xl font-bold tracking-tight font-cursive text-white">{module.name}</h5>
//                         <p className="mb-3 text-sm sm:text-base font-normal text-white">{module.description}</p>
//                     </div>
//                 </div>
//                 <div className="flip-card-back bg-blue-700">
//                     <div className="p-3 sm:pt-3 sm:pb-2">
//                         <p className="text-white">Additional information or actions</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     ))}
// </div>
