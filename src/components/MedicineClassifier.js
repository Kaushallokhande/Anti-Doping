import React, { useState } from 'react';
import substancesData from './substancesData';

const MedicineClassifier = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewSrc, setPreviewSrc] = useState(null);
    const [loading, setLoading] = useState(false);
    const [output, setOutput] = useState(null);
    const [substanceInfo, setSubstanceInfo] = useState(null);

    const handleFile = (file) => {
        if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onload = (e) => {
                setPreviewSrc(e.target.result);
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please select a valid image file (.jpg, .jpeg, .png).');
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFile(files[0]);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleImageInputChange = (e) => {
        const files = e.target.files;
        if (files.length > 0) {
            handleFile(files[0]);
        }
    };

    const classifyMedicine = () => {
        if (!selectedFile) {
            alert('Please select an image first.');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        setLoading(true);
        fetch('', { //http://127.0.0.1:5000/predict
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                const predictedClass = data.predicted_class;
                setOutput({
                    predictedClass,
                    modelAccuracy: (data.model_accuracy * 100).toFixed(2),
                });

                // Find the substance data
                const substance = substancesData.find((substanceData) =>
                    substanceData.name.toLowerCase() === predictedClass.toLowerCase()
                );
                setSubstanceInfo(substance || { name: predictedClass, description: 'No detailed information available.' });
            })
            .catch((error) => {
                setLoading(false);
                console.error('Error:', error);
                alert('An error occurred while classifying the image.');
            });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-transparent p-6">
            <h1 className="text-3xl font-bold mb-6 text-gray-600">Medicine Classifier</h1>

            <div className="flex flex-col md:flex-row w-full max-w-4xl space-y-6 md:space-y-0 md:space-x-6">
                <div
                    className="flex-1 border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center bg-white hover:bg-gray-50 cursor-pointer"
                    onClick={() => document.getElementById('imageInput').click()}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                >
                    <p className="text-center text-gray-600">Drag & Drop an image here or Click to select</p>
                </div>

                {previewSrc && (
                    <img
                        src={previewSrc}
                        alt="Image preview"
                        className="flex-1 mt-6 md:mt-0 max-w-full h-[300px] object-cover border-2 border-gray-300 rounded-lg shadow-md"
                    />
                )}
            </div>

            <input
                type="file"
                id="imageInput"
                accept="image/jpeg, image/png"
                className="hidden"
                onChange={handleImageInputChange}
            />

            <button
                onClick={classifyMedicine}
                className="mt-6 px-6 py-3 text-lg text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-transform transform active:translate-y-1 shadow-lg"
            >
                Classify Medicine
            </button>

            {loading && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-75 z-50">
                    <div className="text-blue-600 text-lg mr-4">Loading...</div>
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-opacity-70"></div>
                </div>
            )}

            {output && (
                <div className="mt-8 p-6 bg-white border border-gray-300 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-blue-600">Predicted Class: {output.predictedClass}</h3>
                    <p className="mt-2 text-lg text-gray-600">Model Accuracy: {output.modelAccuracy}%</p>
                    {substanceInfo && (
                        <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Details:</h4>
                            <p className="text-gray-600"><strong className="text-gray-800">Category:</strong> {substanceInfo.category || 'N/A'}</p>
                            <p className="text-gray-600 mt-1"><strong className="text-gray-800">Status:</strong> {substanceInfo.status || 'N/A'}</p>
                            <p className="text-gray-600 mt-1"><strong className="text-gray-800">Description:</strong> {substanceInfo.description || 'N/A'}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default MedicineClassifier;
