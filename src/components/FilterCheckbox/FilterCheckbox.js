import React from 'react';

function FilterCheckbox({ onChecked, isChecked }) {

    return (
        <div className="checkbox-container container">
            <label className="checkbox__label">
                <input type="checkbox" onChange={onChecked} checked={isChecked} />
                <div className="checkbox__checkmark"></div>
            </label>
            <div className="checkbox__body">Короткометражки</div>
        </div>
    )
}

export default FilterCheckbox;