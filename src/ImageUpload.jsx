export function ImageUpload({children}){
    return(
        <label htmlFor="uploading image">
            {children}
              <input
                type="file"
                name="profile"
                className="upload-file"
                id="profilepic"
                accept=".png, .jpg, .jpeg"
              />
        </label>
    )
}