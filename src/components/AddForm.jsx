import PropTypes from "prop-types";

const AddForm = ({ onAdd }) => {
  return (
    <form onSubmit={onAdd} autoComplete="off" className="flex gap-x-2">
      <input type="text" name="input" className="bg-[#1B4242] px-2 h-10 focus:outline-none rounded-md w-full"/>
      <button type="submit" className="h-10 px-2 rounded-md bg-[#005B41]">Add</button>
    </form>
  );
};

AddForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddForm;
