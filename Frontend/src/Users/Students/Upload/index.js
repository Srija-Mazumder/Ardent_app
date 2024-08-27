const Upload = () => {
 return(
    <>
    <div className="">
    <form>
  <fieldset disabled>
    <legend>Disabled fieldset example</legend>
    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Disabled input</label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input"/>
    </div>
    <div className="mb-3">
      <label for="disabledSelect" class="form-label">Disabled select menu</label>
      <select id="disabledSelect" class="form-select">
        <option>Disabled select</option>
      </select>
    </div>
    <div className="mb-3">
      <div class="form-check">
        <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled/>
        <label className="form-check-label" for="disabledFieldsetCheck">
          Can't check this
        </label>
      </div>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </fieldset>
</form>

    </div>
    </>
 );   
}

export default Upload;
