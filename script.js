window.onload = function() {
    // Get the form element
    var form = document.querySelector('form');

    // Listen for form submit event
    form.addEventListener('submit', function(event) {
        // Prevent the form from being submitted
        event.preventDefault();

        // Get form values
        var fullName = document.getElementById('fullName').value;
        var dob = document.getElementById('dob').value;
        var email = document.getElementById('email').value;
        var phoneNumber = document.getElementById('phoneNumber').value;
        var gender = document.querySelector('input[name="gender"]:checked').value;
        var program = document.getElementById('program').value;
        var address = document.getElementById('address').value;
        var motherName = document.getElementById('motherName').value;
        var fatherName = document.getElementById('fatherName').value;
        var photo = document.getElementById('photo').files[0];

        var header = document.createElement('h1');
        header.classList.add('mt-5', 'text-center');
        header.textContent = 'Form Data';
        header.style.fontFamily = 'Poetsen One, sans-serif';
        header.style.color = 'white';

        // Append the header to the body
        document.body.appendChild(header);

        // Create a div to display the form values
        var displayDiv = document.createElement('div');
        displayDiv.classList.add('container', 'mt-1', 'text-center', 'card');
        displayDiv.style.backgroundColor = 'white'; 
        displayDiv.style.fontFamily = 'Roboto, sans-serif';
        displayDiv.innerHTML = `
            <div class="row justify-content-center mt-1">
                <div class="col-6">
                    <p><strong>Full Name:</strong><br> ${fullName}</p>
                    <p><strong>Date of Birth:</strong><br> ${dob}</p>
                    <p><strong>Email:</strong><br> ${email}</p>
                    <p><strong>Phone Number:</strong><br> ${phoneNumber}</p>
                    <p><strong>Gender:</strong><br> ${gender}</p>
                    <p><strong>Program of Interests:</strong><br> ${program}</p>
                    <p><strong>Address:</strong><br> ${address}</p>
                    <p><strong>Mother's Name:</strong><br> ${motherName}</p>
                    <p><strong>Father's Name:</strong><br> ${fatherName}</p>
                    <p><strong>Photo:</strong></p>
                </div>
            </div>
        `;

        document.body.appendChild(displayDiv);


        var reader = new FileReader();
        reader.onload = function(e) {
            // Create img element
            var img = document.createElement('img');
            img.src = e.target.result;
            img.alt = 'Uploaded photo';
            img.classList.add('img-thumbnail');

            // Append img element to the div
            displayDiv.querySelector('.col-6').appendChild(img);
        };
        reader.readAsDataURL(photo);
    });
};
