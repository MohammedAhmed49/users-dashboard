import { useEffect, useState } from "react";

const DeleteConfirmModal = (props) => {
  const [showModal, setShowModal] = useState(props.isOpened);

  useEffect(() => {
    setShowModal(props.isOpened);
  });

  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={props.closeModal}
          >
            <div
              className="relative my-6 mx-auto w-1/3 cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-primary outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold dark:text-white">
                    Delete confirmation
                  </h3>
                </div>

                <div className="relative p-6 flex-auto dark:text-white">
                  <p>Are you sure you want to delete?</p>
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-black dark:text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={props.closeModal}
                  >
                    Close
                  </button>
                  <button
                    className="bg-red-400 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={props.confirmDelete}
                  >
                    Confirm
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

export default DeleteConfirmModal;
