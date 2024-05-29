package main

import (
	"log"
	"net/http"
	"net/mail"
    "github.com/labstack/echo/v5"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/tools/mailer"
	// "github.com/pocketbase/pocketbase/tools/template"
)

type VerifyOTPRequest struct {
	OTP string `json:"otp" validate:"required"`
}

func main() {
	app := pocketbase.New()

	app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
		e.Router.POST("/verify-otp", func(c echo.Context) error {
			var req VerifyOTPRequest
			
			// Bind the request JSON to the struct
			if err := c.Bind(&req); err != nil {
				return c.JSON(http.StatusBadRequest, map[string]string{"error": "Invalid request"})
			}
	
			// Log the received OTP
			log.Println("Got OTP for Verification:", req.OTP)
	
			// Further processing (e.g., OTP verification) can be done here
	
			return c.JSON(http.StatusOK, map[string]string{"message": "OTP received"})
		}, /* optional middlewares */)
	
		return nil
	})

	// fires only for "users" collections
	app.OnRecordAfterCreateRequest("users").Add(func(e *core.RecordCreateEvent) error {
		log.Println("Record: ",e.Record)

		// You can check the record here, generate some OTP, save
		// it to users collection or your custom collection. Send the
		// email programmatically here and ...

		otp := "123456" // Generate this however you wish

		// You might need to save some states or flags to database too.
		// You can create a custom collection programmatically, via UI or
		// even extend the users collection itself as you see fit.
		// Check here: https://pocketbase.io/docs/go-database/

		// Send the email
		// message := &mailer.Message{
		// 	From: mail.Address{
		// 		Address: app.Settings().Meta.SenderAddress,
		// 		Name:    app.Settings().Meta.SenderName,
		// 	},
		// 	To:      []mail.Address{{Address: e.Record.Email()}},
		// 	Subject: "OTP for Login to GreatApe",
		// 	HTML:    "Hello welcome to Greatape, here's your One time Password to login " + otp,
		// 	// bcc, cc, attachments and custom headers are also supported...
		// }

		// Send the email
		message := &mailer.Message{
			From: mail.Address{
				Address: app.Settings().Meta.SenderAddress,
				Name:    app.Settings().Meta.SenderName,
			},
			To:      []mail.Address{{Address: e.Record.Email()}},
			Subject: "OTP for Login to GreatApe",
			HTML: `
				<!DOCTYPE html>
				<html lang="en">
				<head>
					<meta charset="UTF-8">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<title>OTP for Login</title>
					<style>
						body {
							font-family: Arial, sans-serif;
							background-color: #f4f4f4;
							margin: 0;
							padding: 0;
						}
						.container {
							width: 100%;
							max-width: 600px;
							margin: 0 auto;
							background-color: #ffffff;
							padding: 20px;
							box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
						}
						.header {
							text-align: center;
							padding: 10px 0;
						}
						.header img {
							width: 150px;
						}
						.content {
							padding: 20px;
							text-align: center;
						}
						.content h1 {
							color: #333333;
						}
						.content p {
							color: #666666;
							line-height: 1.5;
						}
						.otp {
							display: inline-block;
							padding: 10px 20px;
							font-size: 18px;
							color: #000000;
							background-color: #ffcc00;
							border-radius: 5px;
							margin-top: 20px;
							text-decoration: none;
						}
						.footer {
							text-align: center;
							padding: 10px;
							font-size: 12px;
							color: #999999;
						}
					</style>
				</head>
				<body>
					<div class="container">
					
						<div class="content">
							<h1>Welcome to GreatApe</h1>
							<p>Hello, welcome to GreatApe. Here is your One-Time Password (OTP) to login:</p>
							<div class="otp">` + otp + `</div>
						</div>
						
					</div>
				</body>
				</html>
			`,
			// bcc, cc, attachments and custom headers are also supported...
		}


		log.Println("Message: ",message)

		return app.NewMailClient().Send(message)
	})

	app.OnMailerBeforeRecordVerificationSend().Add(func(e *core.MailerRecordEvent) error {
        log.Println(e.MailClient)
        log.Println(e.Message)
        log.Println(e.Record)
        log.Println(e.Meta)

        // change the mail subject
        e.Message.Subject = "new subject"

        return nil
    })


	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
