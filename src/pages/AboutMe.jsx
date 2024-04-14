import { Link } from 'react-router-dom';
import me from '../assets/images/me.jpg';

export default function AboutMe() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">

                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My name is Jules Magnan</h2>
                        <h2 className="text-1xl font-bold tracking-tight text-gray-900 sm:text-2xl">Born in Marseille</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            French Student at Epita. You can see my different projects on my <Link to={'/projects'} className="text-indigo-600 underline hover:text-indigo-800">portfolio</Link>. 
                            Big fan of Lord Of The Rings. I've read Silmarillion so don't hesitate to talk to me about it.
                        </p>
                    </div>

                    <div className="relative overflow-hidden rounded-lg bg-white">
                        <img
                            src={me}
                            alt="me"
                            className="object-cover object-scale-down object-center w-38 md:w-full"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}
