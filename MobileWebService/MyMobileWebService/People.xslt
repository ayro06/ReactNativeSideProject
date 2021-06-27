<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl">
<xsl:output method="xml" indent="yes"/>
  <xsl:template match="/">
        <table border="1" style="min-width:100%">
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
          <xsl:for-each select="People/Person">
            <tr>
              <td>
                <xsl:value-of select="Name"/>
              </td>
              <td>
                <xsl:value-of select="Phone"/>
              </td>
              <td>
                <xsl:value-of select="Address/Street"/>, <xsl:value-of select="Address/City"/>             
                <br />
                <xsl:value-of select="Address/State"/>, <xsl:value-of select="Address/Zip"/>, <xsl:value-of select="Address/Country"/>
              </td>
            </tr>
          </xsl:for-each>
        </table>
  </xsl:template>  
</xsl:stylesheet>