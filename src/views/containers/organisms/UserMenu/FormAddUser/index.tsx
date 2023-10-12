import { inputAuthFormStructure, inputPersonalFormStructure } from "@/utils/data/static";
import FormDropdownComponent from "@/views/components/atoms/FormDropdownComponent";
import FormInputComponent from "@/views/components/atoms/FormInputComponent";
import { useRouter } from "next/router";
import { useState } from "react";

const FormSegment = () => {
    const [values, setValues]: any = useState({
      fullName: "",
      phone: "",
      address: "",
      username: "",
      email: "",
      password: "",
      gender: "",
      instansiId: "",
      cabangId: "",
      usertypeId: "",
    });

    const [isError, setIsError]: any = useState({
      fullName: false,
      phone: false,
      address: false,
      username: false,
      email: false,
      password: false,
      confirmPassword: false,
    });

    const [regexCode, setRegexCode]: any = useState({
      fullName: "^[a-zA-Z0-9_ ]{3,}$",
      phone: "^[0-9]{11,15}$",
      address: "",
      username: "^[a-z0-9]{3,20}$",
      email: "^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$",
      password: "^(?=[A-Za-z0-9@#$%^&+!=£]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=£])(?=.{8,}).*$",
      confirmPassword: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const {push} = useRouter();

    const handleSubmit = async (e: any) => {
      e.preventDefault();
      setIsLoading(true);

      const valueError = Object.values(isError);

      if (valueError.includes(true) === false) {
        const result = await fetch('/api/register', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (result.status === 200) {
          setIsLoading(false);
          push('/dashboard');
        } else {
          setIsLoading(false);
          setErrorMessage(result.status === 400 ? "Email already axist" : "");
        }
      } else {
        setIsLoading(false);
        setErrorMessage("Data yang anda masukkan tidak valid");
        push('/user/create');
      }
    }

    const onChange = (e: any) => {
      const inputValues = e.target.value;
      const inputName = e.target.name;

      if (inputName != 'confirmPassword') {
        setValues({...values, [e.target.name]: e.target.value});
      }

      let result;
      if (e.target.name === 'confirmPassword') {
        if (inputValues != values['password']) {
          result = null;
        } else {
          result = values;
        }
        console.log(result);

      } else {
        result = inputValues.match(regexCode[inputName]);
      }

      if (result == null) {
        setIsError({...isError, [e.target.name]: true});
      } else {
        setIsError({...isError, [e.target.name]: false});
      }
    }

    return(
        <div className="row">
            <div className="col-lg-12">
              {
                errorMessage ? (
                  <div className="alert alert-danger alert-dismissible" role="alert">
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                    <h6><i className="fas fa-ban"></i><b> Tambah Data User Gagal!</b></h6>
                  </div>
                ) : null
              }
              {/* Form Basic */}
              <form onSubmit={handleSubmit}>
                <div className="card mb-4">
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h5 className="m-0 font-weight-bold text-primary">Personal</h5>
                  </div>
                  <div className="card-body">
                      {
                        inputPersonalFormStructure.map(({
                          id,
                          type,
                          label,
                          name,
                          placeholder,
                          dataOption,
                          errorMessage,
                          required,
                        }) => {
                          if (type == "dropdown") {
                            return <FormDropdownComponent key={id} label={label} name={name} data={dataOption} required={required} onChange={onChange} />
                          } else {
                            return <FormInputComponent key={id} label={label} type={type} name={name} placeholder={placeholder} value={values[name]} onChange={onChange} isError={isError[name]} errorMessage={errorMessage} required={required} />
                          }
                        })
                      }
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h5 className="m-0 font-weight-bold text-primary">Authentikasi</h5>
                  </div>
                  <div className="card-body">
                    {
                      inputAuthFormStructure.map(({
                        id,
                        type,
                        label,
                        name,
                        placeholder,
                        dataOption,
                        errorMessage,
                        required,
                      }) => {
                        if (type == "dropdown") {
                          return <FormDropdownComponent key={id} label={label} name={name} data={dataOption} required={required} onChange={onChange} />
                        } else {
                          return <FormInputComponent key={id} label={label} type={type} name={name} placeholder={placeholder} value={values[name]} onChange={onChange} isError={isError[name]} errorMessage={errorMessage} required={required} />
                        }
                      })
                    }
                    <button type="submit" className="btn btn-success btn-block" disabled={isLoading}>{isLoading ? "Loading..." : "Simpan"}</button>
                  </div>
                </div>
              </form>
            </div>
        </div>
    );
}

export default FormSegment;