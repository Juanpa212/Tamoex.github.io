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
        </style>
      </head>
      <body>
        <h1>Textbooks</h1>
        <table>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>Website</th>
            <th>Year</th>
            <th>ISBN</th>
            <th>Edition</th>
            <th>Cover</th>
          </tr>
          <xsl:apply-templates select="textbook"/>
        </table>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="textbook">
    <tr>
      <td><xsl:value-of select="title"/></td>
      <td><xsl:value-of select="concat(author/first_name, ' ', author/last_name)"/></td>
      <td><xsl:value-of select="publisher/name"/></td>
      <td><a href="{publisher/website}"><xsl:value-of select="publisher/website"/></a></td>
      <td><xsl:value-of select="year"/></td>
      <td><xsl:value-of select="ISBN"/></td>
      <td><xsl:value-of select="edition"/></td>
      <td><xsl:value-of select="cover"/></td>
    </tr>
  </xsl:template>
</xsl:stylesheet>
