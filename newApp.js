// fetch('/data.json')
//     .then(response => response.json())
//     .then(data => {
//
//     })
//     .catch(error => {
//         console.error('An error occurred:', error);
//     });
//


const jsonList = document.getElementById("myData");

fetch('/data.json')
    .then(function (response) {
        return response.json();
    })
    .then(data => {
        for (const key in data) {
            const listItem = document.createElement("div");
            if (data.hasOwnProperty(key)) {
                const companyData = data[key];


                listItem.classList.add("jobDescription");
                if (companyData.new === true &&  companyData.featured === true ){
                    companyData.new.innerHTML === "NEW";
                    companyData.featured.innerText = "Featured"
                    listItem.innerHTML = `
                    <div class="jobDescription_left">
                    <img src="${companyData.logo}" alt="${companyData.id}">
                        <ul class="company_names_offer">
                            <li class="company_name">${companyData.company}
                                <ul class="job_latest">
                                    <li><span>NEW!</span></li>
                                    <li class="featured">Featured</li>
                                </ul>
                            </li>
                            <li class="position">${companyData.position}</li>
                            <ul class="date_location">
                                <li>${companyData.postedAt}</li>
                                <li>${companyData.contract}</li>
                                <li>${companyData.location}</li>
                            </ul>
                        </ul>
                    </div>
                   <div class="qualifications">
                        <button>${companyData.languages.join("</button><button>")}</button>
                        <button>${companyData.role}</button>
                        ${companyData.tools.length > 0 ? `<button>${companyData.tools.join("</button><button>")}</button>` : ''}
                        <button>${companyData.level}</button>
                    </div>`;

                }else{
                    listItem.innerHTML = `
                    <div class="jobDescription_left">
                    <img src="${companyData.logo}" alt="${companyData.id}">
                        <ul class="company_names_offer">
                            <li class="company_name">${companyData.company}
                            </li>
                            <li class="position">${companyData.position}</li>
                            <ul class="date_location">
                                <li>${companyData.postedAt}</li>
                                <li>${companyData.contract}</li>
                                <li>${companyData.location}</li>
                            </ul>
                        </ul>
                    </div>
                    <div class="qualifications">
                        <button>${companyData.languages.join("</button><button>")}</button>
                       ${companyData.tools.length > 0 ? `<button>${companyData.tools.join("</button><button>")}</button>` : ''}
                        <button>${companyData.role}</button>
                        <button>${companyData.level}</button>
                    </div>`;
                }


            }
            jsonList.appendChild(listItem);


        }
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button =>{
            button.addEventListener('click', function (){
                alert("clicked")
            })
        })
    })
    .catch(error => {
        console.error("Error loading JSON file:", error);
    });
