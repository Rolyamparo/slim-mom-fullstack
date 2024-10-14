import { GrClose } from 'react-icons/gr';
import css from './DiaryProductListItem.module.css';

export const DiaryProductListItem = ({
  product, // This is the entire product object now
  isLoadingDeletedProd,
  onDelete,
}) => {
  // Directly extract the properties from the product object
  const { product: title, quantity, calories, _id } = product;

  const handleDelete = () => {
    document.body.style.overflow = 'hidden';
    onDelete && onDelete(_id);
  };

  return (
    <li className={css.listItem}>
      <div className={css.info}>
        <div className={css.productList}>{title}</div>
        {/* Product name is now displayed directly */}
        <div className={css.quantityList}>{quantity} g</div>
        <div className={css.calorieList}>{Math.round(calories)} kcal</div>
      </div>

      <button
        type="button"
        onClick={handleDelete}
        disabled={isLoadingDeletedProd}
      >
        <GrClose />
      </button>
    </li>
  );
};
