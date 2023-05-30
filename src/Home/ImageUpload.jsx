export function ImageUpload({children, onChange}){
    return(

        <label htmlFor="uploading image">
            {children}
              <input
                type="file"
                name="profile"
                className="upload-file"
                id="profilepic"
                accept=".png, .jpg, .jpeg"
                onChange={onChange}
              />
        </label>
    )
}