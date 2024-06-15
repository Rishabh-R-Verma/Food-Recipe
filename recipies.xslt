<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <title>Recipes</title>
        <style>
          table {
            font-family: Arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
          }
          th, td {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
          }
          th {
            background-color: #f2f2f2;
          }
        </style>
      </head>
      <body>
        <h1>Recipes</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Cost</th>
            <th>Time Taken</th>
            <th>Difficulty</th>
            <th>Cuisine</th>
          </tr>
          <xsl:apply-templates select="recipes/recipe"/>
        </table>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="recipe">
    <tr>
      <td><xsl:value-of select="name"/></td>
      <td><xsl:value-of select="cost"/></td>
      <td><xsl:value-of select="time_taken"/></td>
      <td><xsl:value-of select="difficulty"/></td>
      <td><xsl:value-of select="cuisine"/></td>
    </tr>
  </xsl:template>
</xsl:stylesheet>

