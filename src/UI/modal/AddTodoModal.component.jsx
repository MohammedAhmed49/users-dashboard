import { useEffect, useRef, useState } from "react";

const AddTodoModal = (props) => {
  const [showModal, setShowModal] = useState(props.isOpened);

  const inputRef = useRef();

  useEffect(() => {
    setShowModal(props.isOpened);
  });

  const closeModalHandler = () => {
    props.closeModal();
  };

  const addTodoHandler = () => {
    const value = inputRef.current.value;

    if (!value) {
      alert("Todo can't be empty!");
    } else {
      props.addTodo(value);
      props.closeModal();
    }
  };
  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={props.closeModal}
          >
            <div
              className="relative my-6 mx-auto w-1/3"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none dark:bg-primary">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold dark:text-white">
                    Add a new todo
                  </h3>
                </div>

                <div className="relative p-6 flex-auto">
                  <input
                    type="text"
                    className="form-input rounded-lg flex-grow w-full border-borderClr dark:border-white"
                    placeholder="Enter the new todo"
                    ref={inputRef}
                    required
                  />
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={closeModalHandler}
                  >
                    Close
                  </button>
                  <button
                    className="bg-green-400 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={addTodoHandler}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default AddTodoModal;
