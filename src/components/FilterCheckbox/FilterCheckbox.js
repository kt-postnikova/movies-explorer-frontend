import React from 'react';

function FilterCheckbox(params) {
    return (
        <div className="checkbox container">
            <label class="checkbox__label">
                <input type="checkbox" />
                <span class="checkbox__span"></span>
            </label>
            <p className="checkbox__name">Короткометражки</p>
        </div>
    )
}

export default FilterCheckbox;