/** @format */

'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Form from '../components/RecipeForm';
import DeloitteLogo from '../components/DeloitteDigital.jpeg'; // Ensure this path is correct

export default function Home() {
    const router = useRouter();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="w-full max-w-4xl p-12 border-4 border-gray-300 rounded-2xl shadow-lg">
                <div className="flex flex-col items-center mb-8">
                    <Image
                        src={DeloitteLogo}
                        alt="Deloitte Digital"
                        width={144} // Adjust width according to your requirements
                        className="mb-8"
                    />
                    <h1 className="text-4xl text-center mb-8">
                        Your Digital Assistant
                    </h1>
                </div>
                <div className="w-full p-8 bg-white rounded-xl">
                    <Form
                        onSubmit={(recipeFormData) => {
                            router.push('/generatedRecipe');
                            console.log(recipeFormData);
                        }}
                    />
                </div>
            </div>
        </main>
    );
}
