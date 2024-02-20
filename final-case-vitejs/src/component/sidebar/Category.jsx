import React, { useState } from "react";

const categories = [
    { "value": 'All', "name": 'All' },
    { "value": "laptops", "name": "Tiểu Thuyết" },
    { "value": "fragrances", "name": "LightNovel" },
    { "value": "skincare", "name": "Ngôn Lù" },
    { "value": "groceries", "name": "Kinh Dị" },

]
function Category() {
    const [collapse, setCollapse] = useState(false)
    return (
        <div className="accordion-item py-2 d-flex flex-column justify-content-center">
            <h5 className="accordion-header">
                <span role="button" className={`accordion-button ${collapse ? 'collapsed' : ''}`}
                    onClick={() => setCollapse(!collapse)}>
                    Category
                </span>

            </h5>
            {
                collapse && (
                    <div className="form-group">
                        {
                            categories.map((cat, index) => (
                                <div key={cat.value} className="form-check py-1">
                                    <input className="form-check-input" type="radio" name="category"
                                        id={`cat_${index}`}
                                        value={cat.value}
                                        defaultChecked={cat.value === 'All'}
                                    />
                                    <label
                                        htmlFor={`cat_${index}`}
                                        role="button"
                                        className={`form-check-label ${cat.value === 'All' ? 'text-decoration-underline fw-bolder' : ''}`}
                                    >
                                        {cat.name}
                                    </label>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Category;