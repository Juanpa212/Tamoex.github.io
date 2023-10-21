<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/textbooks">
    <html>
      <head>
        <style>
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
          }
          th {
            background-color: #f2f2f2;
          }
          h1, h4 {
            text-align: center;
          }

          button {
            background-color: darkblue;
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            position: absolute;
            bottom: 10px; 
            right: 10px; 
          }
        </style>
      </head>
      <body>
        <h1>Textbooks</h1>
        <h4>These books are some of these trimester and some of the books i've used to practice.</h4>
        <table>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>Year</th>
            <th>ISBN</th>
            <th>Edition</th>
            <th>Cover</th>
          </tr>
          <xsl:apply-templates select="textbook"/>
        </table>
        <button onclick="goToIndex()">Go Home</button>
      </body>
      <script>
        function goToIndex() {
          window.location.href = 'index.html';
        }
      </script>
    </html>
  </xsl:template>

  <xsl:template match="textbook">
    <tr>
      <td><xsl:value-of select="title"/></td>
      <td><xsl:value-of select="concat(author/first_name, ' ', author/last_name)"/></td>
      <td><a href="{publisher/website}"><xsl:value-of select="publisher/name"/></a></td>
      <td><xsl:value-of select="year"/></td>
      <td><xsl:value-of select="ISBN"/></td>
      <td><xsl:value-of select="edition"/></td>
      <td><xsl:value-of select="cover"/></td>
    </tr>
  </xsl:template>
</xsl:stylesheet>
