import React from 'react';
import "../style/test.css";

function Test({ filter, onFilterChange }) {

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        onFilterChange(prevFilter => ({ ...prevFilter, [name]: value }));
    };

    const handleFilterClick = (e) => {
        e.preventDefault();
        // Trigger the filter change to apply the new filters
        onFilterChange(filter);
    };

    return (
        <div className="tests-container tests-section">
            <div className='tests-my-10'></div>
            <h2 className='text-center'>Apply Filter</h2>
            <section className="tests-filter-box">
                <h2>Categories</h2>
                <form>
                    <label className='tests-mx-3'>
                        Athlete Type:
                        <select
                            className='tests-mx-3'
                            name="athleteType"
                            value={filter.athleteType}
                            onChange={handleFilterChange}
                        >
                            <option value="">Select</option>
                            <option value="Basketball">Basketball</option>
                            <option value="Soccer">Soccer</option>
                            <option value="Tennis">Tennis</option>
                        </select>
                    </label>
                    <label className='tests-mx-3'>
                        Age:
                        <select
                            className='tests-mx-3'
                            name="age"
                            value={filter.age}
                            onChange={handleFilterChange}
                        >
                            <option value="">Select</option>
                            <option value="youth">Youth</option>
                            <option value="adult">Adult</option>
                        </select>
                    </label>
                    <label className='tests-mx-3'>
                        Gender:
                        <select
                            className='tests-mx-3'
                            name="gender"
                            value={filter.gender}
                            onChange={handleFilterChange}
                        >
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </label>
                    <label className='tests-mx-3'>
                        Position:
                        <select
                            className='tests-mx-3'
                            name="position"
                            value={filter.position}
                            onChange={handleFilterChange}
                        >
                            <option value="">Select</option>
                            <option value="forward">Forward</option>
                            <option value="midfielder">Midfielder</option>
                            <option value="defender">Defender</option>
                        </select>
                    </label>
                    <label className='tests-mx-3'>
                        Testing:
                        <select
                            className='tests-mx-3'
                            name="testing"
                            value={filter.testing}
                            onChange={handleFilterChange}
                        >
                            <option value="">Select</option>
                            <option value="In-competitor testing">In-competitor testing</option>
                            <option value="Out-of-competitor testing">Out-of-competitor testing</option>
                            <option value="Blood test">Blood test</option>
                            <option value="Urine test">Urine test</option>
                            <option value="Biological passport">Biological passport</option>
                        </select>
                    </label>
                    <label className='tests-mx-3'>
                        Geography:
                        <select
                            className='tests-mx-3'
                            name="geography"
                            value={filter.geography}
                            onChange={handleFilterChange}
                        >
                            <option value="">Select</option>
                            <option value="National regulation">National regulation</option>
                            <option value="International regulation">International regulation</option>
                            <option value="State-specific regulation">State-specific regulation</option>
                        </select>
                    </label>
                    <div className='tests-filter-button-container'>
                        <button
                            className='tests-filter-button'
                            onClick={handleFilterClick}
                        >
                            Filter
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Test;
