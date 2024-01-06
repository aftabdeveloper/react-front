export default function Radio(){
    return (
        <div>
              <p>Please select your gender:</p>
                <input type="radio" id="male" name="gender" value="MALE" />  
                <label for="male">Male</label><br />
                <input type="radio" id="female" name="gender" value="FEMALE" />
                <label for="female">Female</label>
        </div>
    )
}