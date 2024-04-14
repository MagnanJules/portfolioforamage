import { Link } from 'react-router-dom';
import ocaml from "../assets/images/ocaml.png";
import c from "../assets/images/c.png";
import cc from "../assets/images/cc.png";
import python from "../assets/images/python.png";
import react from "../assets/images/react.png";

import Blog from './BlogRender.jsx';

export const Projects = () => {
    return (
        <>

            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                       My Skills 
                    </h2>
                    <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src={ocaml}
                            alt="Ocaml"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src={c}
                            alt="C#"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src={cc}
                            alt="C"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                            src={python}
                            alt="Python"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                            src={react}
                            alt="React"
                            width={158}
                            height={48}
                        />
                    </div>
                </div>
            </div>
            <Blog/>
        </>
    );
}


export default Projects;
