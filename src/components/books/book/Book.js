import Find from 'lodash/find';
import "./Book.css";
export default function Book({data, books, saveBook, deleteBook, profileView}){

    const bookAdded =  () => {
        let isBookSelected = Find(books,element=>{
            return element.title === data.title 
        })
        if(isBookSelected) {
            return true;
        }
        return false;
    }

    const isBookAdded = bookAdded();
    
    return (

        <div className="card">
            <h5 className="card-header">{data.title}</h5>
            <div className="card-body">
            <h5>{data.subtitle}</h5>

                <table className="table">
                  <tbody>
                    <tr>
                        <td className="text-success font-weight-bold">Title:</td>
                        <td>{data.title}</td>
                    </tr>
                    <tr>
                        <td className="text-success font-weight-bold">Subtitle:</td>
                        <td>{data.subtitle}</td>
                    </tr>
                    <tr>
                        <td className="text-success font-weight-bold">Author:</td>
                        <td>{data.author}</td>
                    </tr>
                    <tr>
                        <td className="text-success font-weight-bold">Publisher:</td>
                        <td>{data.publisher}</td>
                    </tr>
                    <tr>
                        <td className="text-success font-weight-bold">Description:</td>
                        <td>{data.description}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="row">
                    {!isBookAdded && !profileView && <div class="col"><button onClick={()=>saveBook(data)} className="btn btn-primary" >Add</button></div>}  
                    {isBookAdded && !profileView && <div class="col"><button onClick={()=>saveBook(data)} className="btn btn-primary" disabled>Add</button></div>}
                    {isBookAdded && <div class="col"><button onClick={()=>deleteBook(data)} className="btn btn-primary" >Delete</button></div>}
                </div>
                <tr>
                        
                    </tr>
            </div>
        </div>

)}