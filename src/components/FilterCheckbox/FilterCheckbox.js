import React from 'react';

function FilterCheckbox(params) {
    return (
        <div className="checkbox container">
            <label className="checkbox__label">
                <input type="checkbox" />
                <span className="checkbox__span"></span>
            </label>
            <p className="checkbox__name">Короткометражки</p>
        </div>
    )
}

export default FilterCheckbox;