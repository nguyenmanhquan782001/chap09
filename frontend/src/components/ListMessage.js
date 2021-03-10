import { reRender, $ } from "../uitil.js";
import ContactApi from "../api/contactAPI.js";
const ListMessage = {
    async render() {
        const { data: list } = await ContactApi.getAll();
        return `
            <table class = "table table-hover" id="list-message"> 
            <thead> 
                <tr> 
                   <th>STT</th>
                   <th>Họ tên</th>
                   <th>Email</th>
                   <th>Nội dung</th> 
                   <th>Trạng thái</th>
                  <th>Hành động</th>
                </tr>
            </thead>   
            <tbody>
               ${list.map((item , index) => {
                   return   `<tr> 
                     <td>${index + 1}</td>
                     <td>${item.fullname}</td>
                     <td>${item.email}</td>
                     <td>${item.mess}</td>
                     <td>${item.status == 1 ? "Chưa phản hồi " : "Đã phản hồi"}</td> 
                     <td>
                     <button class="btn btn-danger btn-remove" data-id='${item.id}'>Xóa</button>
                     <a style = "padding:9px; " class= "btn btn-info" href= "/#/edit-status/${item.id}">Edit</a>
                     </td>
                   </tr>`


               }).join() 
            
            }
           </tbody>               
        </table>         
        `
    }, 

     async afterRender() { 
          const btns = $("#list-message .btn") ; 
          btns.forEach(btn => {      
            const id = btn.dataset.id ; 
            btn.addEventListener('click'  , async function(){ 
              if (btn.classList.contains('btn-remove')) {
                const question = confirm('Bạn có chắc chắn muốn xóa không?');
                if (question) {
                    await ContactApi.remove(id) ; 
                    await reRender(ListMessage, '#list-message');
                }
            }
                     
            }) ; 
            
        });

     }
}
export default ListMessage ; 