const buildTemplate = ({ name, link }) => {
  const template = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Password Reset</title>
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");

      body {
        width: 100%;
        background-color: #f4f4f4;
        font-family: Arial, sans-serif;
      }
      .container {
        padding: 20px;
        margin: 0 auto;
        max-width: 700px;
        border-radius: 8px;
        background-color: #e6e6e6;
      }
      .header {
        text-align: center;
      }
      .user-name {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      .content {
        padding: 20px 0;
        border-top: 1px solid #999999;
        border-bottom: 1px solid #999999;
        text-align: center;
      }
      .footer {
        color: #777;
        margin-top: 20px;
        text-align: center;
      }
      .btn {
        margin-top: 5px;
        border-radius: 4px;
        padding: 10px 20px;
        margin-bottom: 15px;
        text-decoration: none;
        display: inline-block;
        border: 2px solid rgb(96, 96, 96);
      }

      .btn:hover {
        transition: all 0.3s;
        box-shadow: 0px 1px 5px rgb(96, 96, 96);
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Password Reset</h1>
      </div>
      <div class="content">
        <p class="user-name">Hello ${name},</p>
        <p>
          We received a request to reset your password. If you didn't make this
          request, you can ignore this email.
        </p>
        <p>To reset your password, click the button below:</p>
        <a href="${link}" class="btn" role="button">Reset Password</a>
        <p>
          If the button doesn't work, you can also copy and paste the following
          URL into your browser:
        </p>
        <p>${link}</p>
      </div>
      <div class="footer">
        <p>
          If you need further assistance, please contact our support team at
          support@simpto.com.
        </p>
      </div>
    </div>
  </body>
</html>
`;

  return template;
};

module.exports = buildTemplate;
