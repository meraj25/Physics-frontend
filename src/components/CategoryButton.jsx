function CategoryButton({ selectedCategoryId, onClick }) {    
    return (
        <button onClick={() => onClick(selectedCategoryId)}>
            {selectedCategoryId}
        </button>
    );
}
export default CategoryButton;
