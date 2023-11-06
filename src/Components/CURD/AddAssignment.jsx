import Swal from "sweetalert2";

const AddAssignment = () => {

    const addProduct = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title?.value;
        const date = form.date?.value;
        const level = form.level?.value;
        const marks = form.marks.value;
        const photo = form.photo.value;
        const description = form.description.value;

        const product = { title, date, level, marks, photo, description }
        console.log(product);

        // fetch(`https://sob-dokander-server.vercel.app/products`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(product)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.insertedId) {
        //             Swal.fire({
        //                 title: 'Success!',
        //                 text: 'Product Added Successfully',
        //                 icon: 'success',
        //                 confirmButtonText: 'Cool'
        //             })
        //         }
        //     })
    }

    return (
        <div className="md:p-24 bg-[url('https://i.ibb.co/Fg9F0Fw/banner-add-ass.jpg')] mx-auto bg-center bg-cover bg-blend-overlay bg-[#000] bg-opacity-10 py-8">
            <h2 className="text-3xl font-extrabold text-white mb-5 text-center">Create Assignment</h2>
            <form onSubmit={addProduct} className='w-11/12 md:w-full mx-auto'>
                <div className="md:flex md:md:mb-8 justify-between">
                    <div className="form-control md:w-[48%]">
                        <span className="label-text text-white text-lg">Assignment Title</span>
                        <input type="text" name="title" placeholder="Assignment Title" className="input input-bordered w-full bg-opacity-0 border border-[#009fe2] mt-2 text-white" required />
                    </div>
                    <div className="form-control md:w-[48%]">
                        <span className="label-text text-white text-lg">Thumbnail Image URL</span>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full bg-opacity-0 border border-[#009fe2] mt-2 text-white" required />
                    </div>
                </div>

                <div className="md:flex md:mb-8 justify-between">
                    <div className="form-control md:w-[48%]">
                        <span className="label-text text-white text-lg">Date</span>
                        <input type="date" name="date" placeholder="Date" className="input input-bordered w-full bg-opacity-0 border border-[#009fe2] mt-2 text-white" required />
                    </div>
                    <div className="form-control md:w-[48%]">
                        <span className="label-text text-white text-lg">Difficulty level</span>
                        <select name="level" required id="" className="input input-bordered w-full bg-opacity-0 border border-[#009fe2] mt-2 text-white">
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>

                    </div>
                </div>

                <div className="md:flex md:mb-8 justify-between">
                    <div className="form-control md:w-[48%]">
                        <span className="label-text text-white text-lg">PDF Link</span>
                        <input type="text" className="input input-bordered w-full bg-opacity-0 border border-[#009fe2] mt-2 text-white" name="pdf" placeholder="Enter PDF Link" id="" />

                    </div>
                    <div className="form-control md:w-[48%]">
                        <span className="label-text text-white text-lg">Marks</span>
                        <input type="number" name="marks" placeholder="Enter Marks" className="input input-bordered w-full bg-opacity-0 border border-[#009fe2] mt-2 text-white" required />
                    </div>
                </div>

                <div className="md:mb-8">
                    <span className="label-text text-white text-lg">Description</span>
                    <textarea className='p-3 w-full rounded-lg bg-opacity-0 border border-[#009fe2] mt-2 text-white bg-white' placeholder='Enter Description' name="description" id="" cols="" rows="6"></textarea>
                </div>

                <input type="submit" value="Add Assignments" className="btn btn-block bg-[#1536f0d4] text-white text-xl border mt-3 border-[#2c2cff] hover:text-[#2c2cff] hover:bg-white" />
            </form>

        </div>
    );
};

export default AddAssignment;