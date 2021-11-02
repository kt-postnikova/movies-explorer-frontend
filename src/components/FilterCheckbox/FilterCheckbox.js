import React from 'react';

function FilterCheckbox({ onChecked }) {
    return (
        <div className="checkbox container">
            <label className="checkbox__label">
                <input type="checkbox" onClick={onChecked} />
                <span className="checkbox__span"></span>
            </label>
            <p className="checkbox__name">Короткометражки</p>
        </div>
    )
}

export default FilterCheckbox;