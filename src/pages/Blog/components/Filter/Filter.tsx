import React from 'react';

export const Filter = () => {
    return (
        <select>
            <option value="Govno">Govno</option>
            <option value="Pizda">Pizda</option>
            <option value="Zalupa">Zalupa</option>
            <option selected value="All">Все новости</option>
        </select>
    );
};

