<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
  <h2>Employee details</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th style="text-align:left">Employee ID</th>
      <th style="text-align:left">Name</th>
      <th style="text-align:left">Designation</th>
      <th style="text-align:left">Salary </th>
      <th style="text-align:left">Location</th>
      <th style="text-align:left">Number</th>


    </tr>
    <xsl:for-each select="employee/emp">
    <tr>
      <td><xsl:value-of select="id"/></td>
      <td><xsl:value-of select="name"/></td>
      <td><xsl:value-of select="designation"/></td>
    <td><xsl:value-of select="salary"/></td>
    <td><xsl:value-of select="location"/></td>
    <td><xsl:value-of select="number"/></td>
    </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>

