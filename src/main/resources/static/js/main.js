let translator =  undefined;


let language = undefined;
$(document).ready(function() {
    $.get(
        'http://localhost:8085/translator',
        "",

        function (response, status) {

            translator = response['_embedded']['translator']

            let output = '' +
                '<table class="table">' +
                '  <thead>' +
                '    <tr>' +
                '      <th scope="col">#</th>' +
                '      <th scope="col">kinyarwanda</th>' +
                '      <th scope="col">English</th>' +
                '      <th scope="col">french</th>' +
                '      <th scope="col">kiswahili</th>' +
                '    </tr>' +
                '  </thead>' +
                '  <tbody>' +
                '';
            let rows = translator.map(each => {
                $("#selectVariableName").append(`<option value="${each.v_name}">
                                       ${each.v_name}
                                  </option>`);
                return '' +
                    '<tr>' +
                    '      <th scope="row">'+each.v_name+'</th>' +
                    '      <td>'+each.kinyarwanda+'</td>' +
                    '      <td>'+each.english+'</td>' +
                    '      <td>'+each.french+'</td>' +
                    '      <td>'+each.kiswahili+'</td>' +
                    '    </tr>' +
                    ''

            });
            rows.map(each =>{
                output += each;
            })
            output +='</tbody></table>'

            $('#outputDiv').html(output);
        }
    );

        $('#getData').click(function (e) {
            $("#outputDiv").html("fetch");

            let variableN = $("#selectVariableName").val();
            const language = $("#selectLanguage").val();
            if(variableN === "All" && language === "All"){
                $.get(
                    'http://localhost:8085/translator',
                    "",

                    function (response, status) {

                        let translator = response['_embedded']['translator']


                        let output = '' +
                            '<table class="table">' +
                            '  <thead>' +
                            '    <tr>' +
                            '      <th scope="col">#</th>' +
                            '      <th scope="col">kinyarwanda</th>' +
                            '      <th scope="col">English</th>' +
                            '      <th scope="col">french</th>' +
                            '      <th scope="col">kiswahili</th>' +
                            '    </tr>' +
                            '  </thead>' +
                            '  <tbody>' +
                            '';
                        let rows = translator.map(each => {
                            return '' +
                                '<tr>' +
                                '      <th scope="row">'+each.v_name+'</th>' +
                                '      <td>'+each.kinyarwanda+'</td>' +
                                '      <td>'+each.english+'</td>' +
                                '      <td>'+each.french+'</td>' +
                                '      <td>'+each.kiswahili+'</td>' +
                                '    </tr>' +
                                ''

                        });
                        rows.map(each =>{
                            output += each;
                        })
                        output +='</tbody></table>'

                        $('#outputDiv').html(output);
                    }
                );
            }
            else if(variableN=== "All" && language !== "All"){
                $.get(
                    'http://localhost:8085/translator',
                    "",

                    function (response, status) {

                        let translator = response['_embedded']['translator']


                        let output = '' +
                            '<table class="table">' +
                            '  <thead>' +
                            '    <tr>' +
                            '      <th scope="col">#</th>' +
                            '      <th scope="col">'+language.toLowerCase()+'</th>' +
                            '    </tr>' +
                            '  </thead>' +
                            '  <tbody>' +
                            '';
                        let rows = translator.map(each => {
                            return '' +
                                '<tr>' +
                                '      <th scope="row">'+each.v_name+'</th>' +
                                '      <td>'+each[language.toLowerCase()]+'</td>' +
                                '    </tr>' +
                                ''

                        });
                        rows.map(each =>{
                            output += each;
                        })
                        output +='</tbody></table>'

                        $('#outputDiv').html(output);
                    }
                );
            }
            else if(variableN!== "All" && language==="All"){
                let output = '' +
                    '<table class="table">' +
                    '  <thead>' +
                    '    <tr>' +
                    '      <th scope="col">#</th>' +
                    '      <th scope="col">kinyarwanda</th>' +
                    '      <th scope="col">English</th>' +
                    '      <th scope="col">french</th>' +
                    '      <th scope="col">kiswahili</th>' +
                    '    </tr>' +
                    '  </thead>' +
                    '  <tbody>' +
                    '';
                let data = undefined;
                translator.map(each => {
                    if(each.v_name === variableN){
                        data = each
                    }
                })
                if(data){
                    output+=
                        '<tr>' +
                        '      <th scope="row">'+data.v_name+'</th>' +
                        '      <td>'+data.kinyarwanda+'</td>' +
                        '      <td>'+data.english+'</td>' +
                        '      <td>'+data.french+'</td>' +
                        '      <td>'+data.kiswahili+'</td>' +
                        '    </tr>' +
                        ''
                    $("#outputDiv").html(output);
                }

            }
            else if(variableN!=="All" && language!=="All"){
                let data = undefined;
                translator.map(each => {
                    if(each.v_name === variableN){
                        data = each
                    }
                })
                if(data){
                    $("#outputDiv").html('' +
                        `<div class="container-fluid">
                        <div class="row">
                        <div class="col">
                        <li class="list-group-item">
                        ${data.v_name}
                        </li>
                        </div>
                        <div class="col">
                        <li class="list-group-item">
                        ${data[language.toLowerCase()]}
                        </li>
                        </div>
                        </div>
                        </div>
                        
                        `)
                }
            }


        });
        $('#putData').click(e =>{

            let data = {
                v_name: $("#exampleInputvariable").val(),
                kinyarwanda:$("#exampleInputKinyarwanda").val(),
                english:$("#exampleInputEnglish").val(),
                french:$("#exampleInputFrench").val(),
                kiswahili:$("#exampleInputKiswahili").val()
            }
            if(data.v_name === "" || data.kinyarwanda ===""||data.english === "" || data.french === "" || data.kiswahili === ""){
                alert("fill all form input")
                return
            }
            $.ajax({
                "url": "http://localhost:8085/translator",
                "type": "post",
                headers:{
                    "Content-Type":"application/json"
                },
                "data": JSON.stringify(data)
            }).done(function(results){
                console.log(results);
            });
        });

});