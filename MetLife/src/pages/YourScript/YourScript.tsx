import CommonTable from "../../components/CommonTable/CommonTable";
import copy from '../../assets/images/copy.png'
import recycle from '../../assets/images/recycle.png'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";

export default function YourScript() {

    const [edit, setEdit] = useState(false);
    const [feedBack, setFeedBack] = useState(false);

    const [rows, setRows] = useState([
        ["01", "Create a 90-second explainer", "Dummy text", "Narration"],
        ["02", "Create video script about photosynthesis", "Dummy text", "Monologue"],
        ["03", "Create video script about photosynthesis", "Dummy text", "Monologue"],
        ["04", "Create video script about photosynthesis", "Dummy text", "Monologue"],
        ["05", "Create video script about photosynthesis", "Dummy text", "Monologue"],
    ]);

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [editData, setEditData] = useState({ script: "", ost: "", type: "" });

    const navigate = useNavigate();

    const scriptColumns = ["Scene No.", "Script", "OST", "Type", "Action"];

    // create table rows + action buttons
    const scriptRows = rows.map((row, index) => [
        row[0],
        row[1],
        row[2],
        row[3],
        <div className="flex gap-2">
            <img
                src={copy}
                className="w-5 cursor-pointer"
                onClick={() => {
                    setSelectedIndex(index);
                    setEditData({
                        script: rows[index][1],
                        ost: rows[index][2],
                        type: rows[index][3],
                    });
                    setEdit(true);
                }}
            />
            <img
                src={recycle}
                className="w-5 cursor-pointer"
                onClick={() => setFeedBack(true)}
            />
        </div>,
    ]);

    // handle update
    const updateRow = () => {
        const updated = [...rows];
        updated[selectedIndex][1] = editData.script;
        updated[selectedIndex][2] = editData.ost;
        updated[selectedIndex][3] = editData.type;
        setRows(updated);
        setEdit(false);
    };

    return (
        <>
            <div className="p-6 space-y-5">
                <div className="flex justify-between">
                    <p className="text-2xl font-semibold text-gray-600">Your Script</p>
                    <div className="flex gap-5">
                        <Button text='+ Add Scene' textColor="text-blue-500" bg="bg-white" padding="px-4 py-2" border="border border-blue-500"/>
                        <Button text='Show Source' bg="bg-blue-500" textColor="text-white" padding="px-4 py-2"/>
                    </div>
                </div>

                <CommonTable columns={scriptColumns} rows={scriptRows} hColor='bg-[#fff]' />

                <div className="flex justify-end">
                    <div className="flex gap-5">
                        <button className="cursor-not-allowed rounded-sm shadow-sm text-sm text-blue-500 px-4 py-2 bg-white border border-blue-500"> Regenerate Script</button>
                        <button className="cursor-not-allowed rounded-sm shadow-sm text-sm text-white px-4 py-2 bg-[#99D538]"> Download Script</button>
                        <button
                            className="rounded-sm text-sm text-white px-4 py-2 bg-blue-500 cursor-pointer hover:bg-blue-600"
                            onClick={() => navigate('visuals')}
                        >
                            Create Visual content
                        </button>
                    </div>
                </div>
            </div>

            {/* EDIT MODAL */}
            {edit &&
                <Modal open={edit} onClose={() => setEdit(false)}>
                    <h2 className="text-xl font-semibold mb-4">Edit Script</h2>

                    <div className="">
                        <p className="font-semibold">Script</p>
                        <input
                            className="border  p-2 w-[400px] mb-2 border-gray-400 rounded-lg focus:border-gray-600 outline-none"
                            value={editData.script}
                            onChange={(e) => setEditData({ ...editData, script: e.target.value })}
                        />
                    </div>

                    <div className="mt-2">
                        <p className="font-semibold">OST</p>
                        <input
                            className="border p-2 w-[400px] mb-2 border-gray-400 rounded-lg focus:border-gray-600 outline-none"
                            value={editData.ost}
                            onChange={(e) => setEditData({ ...editData, ost: e.target.value })}
                        />
                    </div>

                    <div className="mt-2">
                        <p className="font-semibold">Type</p>
                        <input
                            className="border p-2 w-[400px] mb-2 border-gray-400 rounded-lg focus:border-gray-600 outline-none"
                            value={editData.type}
                            onChange={(e) => setEditData({ ...editData, type: e.target.value })}
                        />
                    </div>

                    <div className="flex justify-end">
                        <button
                        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                        onClick={updateRow}
                    >
                        Update
                    </button>
                    </div>
                </Modal>
            }

            {/* FEEDBACK MODAL */}
            {feedBack &&
                <Modal open={feedBack} onClose={() => setFeedBack(false)}>
                    <h2 className="text-xl font-semibold mb-4">FeedBack Form</h2>
                    <p className="text-gray-600 mb-1">
                        Your uploaded script will be translated into the selected language.
                    </p>

                    <textarea
                        placeholder="Enter feedback"
                        rows={4}
                        className="border rounded-lg p-2 mb-4 w-full text-sm"
                    />

                    <div className="flex justify-center">
                        <button
                            className="bg-[#239DE0] text-white px-4 py-2 rounded"
                            onClick={() => setFeedBack(false)}
                        >
                            Submit
                        </button>
                    </div>
                </Modal>
            }
        </>
    );
}
