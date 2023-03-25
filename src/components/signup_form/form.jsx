import React from "react";
import Input from "./input";
import PropTypes from "prop-types";

const Form = ({
    values,
    agreement,
    handleAgreement,
    handleChange,
    handleSubmit
}) => {
    return (
        <div>
            <h1 className="text-3xl font-bold">Signup Form</h1>
            <form
                className="grid space-y-4 w-96 border-2 border-slate-500 rounded-md bg-gray-200 p-4 mt-4"
                onSubmit={handleSubmit}
            >
                <Input
                    className=""
                    name="name"
                    type="text"
                    label="Name"
                    placeholder="Enter your Name"
                    value={values.name}
                    onChange={handleChange}
                />
                <Input
                    className=""
                    name="email"
                    type="text"
                    label="Email"
                    placeholder="example@gamil.com"
                    value={values.email}
                    onChange={handleChange}
                />
                <Input
                    className="my-4"
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="Enter Password"
                    value={values.password}
                    onChange={handleChange}
                />
                <Input
                    className="my-4"
                    name="password"
                    type="date"
                    label="Bith Day"
                    value={values.birthDay}
                    onChange={handleChange}
                />

                <div>
                    <label>
                        <input
                            className="mr-1"
                            type="radio"
                            name="gender"
                            value="Male"
                            onChange={handleChange}
                        />
                        Male
                        <input
                            className="mr-1 ml-4"
                            type="radio"
                            name="gender"
                            value="Male"
                            onChange={handleChange}
                        />
                        Female
                    </label>
                </div>

                <div>
                    <label>
                        <input
                            className="mr-1"
                            type="checkbox"
                            name="agreement"
                            checked={agreement}
                            onChange={handleAgreement}
                        />
                    </label>
                    I agree of all these terms and conditions
                </div>

                <button
                    className="text-white bg-blue-500 font-bold w-36 py-2 rounded-md"
                    type="submit"
                    disabled={!agreement}
                >
                    Signin
                </button>
            </form>
        </div>
    );
};

Form.propTypes = {
    values: PropTypes.object.isRequired,
    agreement: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleAgreement: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

export default Form;
