export default function TailSelect({selRef, handleSel, dText, opv, opt}) { 
  return (
    <form action="">
    <label htmlFor="">지역선택</label>
    <select 
            defaultValue=""
            onChange={handleSel}
            ref={selRef}
            className="bg-gray-50 border border-gray-300
                               text-gray-900 text-sm rounded-lg
                                focus:ring-blue-500 focus:border-blue-500 
                                block w-full p-2.5">
            <option value="">{dText}</option>
      {
        opv.map( (item,idx) => <option key={item} value={item}> 
                              {opt[idx]}
                        </option>)
      }
    </select>
    </form>
  )
}