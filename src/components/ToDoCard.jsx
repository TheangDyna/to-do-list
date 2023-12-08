import PropTypes from "prop-types";

const ToDoCard = ({ description, checked, onMark, onEdit, onDelete }) => {
  return (
    <li className="flex gap-x-2">
      <input type="checkbox" checked={checked} onChange={onMark} />
      <input
        className={`${
          checked && "line-through text-[#5C8374]"
        } bg-inherit focus:bg-[#1B4242] focus:text-[#9EC8B9] rounded-md px-2 h-10 focus:outline-none w-full`}
        type="text"
        value={description}
        onChange={onEdit}
      />

      <button onClick={onDelete} className="h-10 px-2 rounded-md bg-[#750E21]">
        delete
      </button>
    </li>
  );
};

ToDoCard.propTypes = {
  description: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onMark: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ToDoCard;
