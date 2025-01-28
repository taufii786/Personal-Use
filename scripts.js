$(document).ready(function () {
    $('#generateQRCode').click(function () {
        const name = $('#name').val();
        const address = $('#address').val();
        const mobile = $('#mobile').val();
        const email = $('#email').val();
        const vehicleNo = $('#vehicleNo').val();
        const eucNo = $('#eucNo').val();
        const vehicleName = $('#vehicleName').val();
        const chassisNo = $('#chassisNo').val();
        const engineNo = $('#engineNo').val();
        const certificateDate = $('#certificateDate').val();

        // Save the form data in session storage
        const formData = {
            name,
            address,
            mobile,
            email,
            vehicleNo,
            eucNo,
            vehicleName,
            chassisNo,
            engineNo,
            certificateDate
        };
        sessionStorage.setItem("formData", JSON.stringify(formData));

        // Generate QR code
        const qrData = `Name: ${name}, Address: ${address}, Mobile: ${mobile}, Email: ${email}, Vehicle No: ${vehicleNo}`;
        
        $('#qrcode').empty(); // Clear previous QR code
        $('#qrcode').qrcode({
            width: 185,  // Adjust QR code width
            height: 185, // Adjust QR code height
            text: qrData
        });

        // Display message
        if (!$('#qrMessage').length) {
            $('#generateQRCode').after('<p id="qrMessage" style="color: green; margin-top: 10px;">QR code generated successfully!</p>');
        }
    });

    // Form submit handler
    $('#vehicleForm').submit(function (e) {
        e.preventDefault();
        window.location.href = "letter.html";
    });
});
