const lessonRequestHeaders = {
  "User-Agent":
    "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:96.0) Gecko/20100101 Firefox/96.0",
  Accept: "*/*",
  "Accept-Language": "en-US,en;q=0.5",
  "Accept-Encoding": "gzip, deflate, br",
  Referer: "https://lancers.managebac.com/student",
  "X-Requested-With": "XMLHttpRequest",
  "X-CSRF-Token":
    "NVBycvCd590f3tkSe76irx0nXF52dgXbnGG6J7pkOfkDjnfoRJxZ48WPGdAB-8fUhsjv7LdcmDwVBMg0DDTmnA",
  Connection: "keep-alive",
  "Sec-Fetch-Dest": "empty",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Site": "same-origin",
  TE: "trailers",
  Cookie:
    "_gcl_au=1.1.979841104.1644135797; _ga_LF1CBJ6YGW=GS1.1.1644135797.1.1.1644135841.0; _ga=GA1.2.893574668.1644135798; _ga_F6FP8X4R65=GS1.1.1644135797.1.1.1644135841.0; _gid=GA1.2.1643046681.1644135798; _fbp=fb.1.1644135798699.1146385528; intercom-id-jm2sktyg=16326978-a1a8-4b58-b389-ab0c72053c14; intercom-session-jm2sktyg=; _managebac_session=VZj63UwALbR1zw4sVrsIgFn%2Bgbk%2FKx6HANlGxmq2DAOHuqz9FOavpf1XKV58L9tYqz2nHlXD9ZdB8SsDKbQkSOHhQQf7Lv9v06BQeCdkBb2Vj3Ez5GZJyI0Um7BR10eSSONezWPxOViGEnLkfQFGKeQiS%2BIJ5iKXH4d4uSNG9AXs4kyn60OUHMSzHjIQQBx4mn5zP9F5qKPdj4SAz16y16kyW7CMELKcDEInnwueuRjzKpbk19fJ%2FQ6WBIr8PDsUt6Uy5uQofA2ks5FORU6yVZHaex23mwnZ7tKn1rOefoV31Y0UsVKe%2FUgFIy79YBrol8tUofQqWSDi4CwtnJpEC41QQAv6ijJnp5quhTMCYAFOVhxB9jkwApE2UAFfF4HRrHfmCt6BSuCGNi4Z2eBIIf0wGqE5l%2FrMoZITMdBc9%2BQXRwF8Mk6JCv%2BPDNrcT4yWYrx3GE%2FytvzbxrC2GMnJg34G5v6BRdytPQ3U4o17ob65r1PC9T4K3e2yhLZa9jhZP6gt%2BF3uSbMxDV8LOuv8joTZYTWzjS4LHYfwCVFI7Aw7xM1NFnFf6oDTf75MjcO1w27yWLpEYDJuh%2B9cjR4i6Cf%2F4Vu%2Fiov8s6MVLraHC1umxJsH93wM10%2BRl4Cszqpe5%2BNbeZlONFk%3D--3NIFsLSUceHrkQP7--FZLDtb%2B27DIttS5OHkIm2w%3D%3D; __utma=58354037.893574668.1644135798.1644135843.1644135843.1; __utmb=58354037.1.10.1644135843; __utmc=58354037; __utmz=58354037.1644135843.1.1.utmcsr=managebac.com|utmccn=(referral)|utmcmd=referral|utmcct=/; __utmt=1; user_id=11235441; user=eyJfcmFpbHMiOnsibWVzc2FnZSI6Ik1URXlNelUwTkRFPSIsImV4cCI6bnVsbCwicHVyIjoiY29va2llLnVzZXIifX0%3D--43aca4f8f1fe4ebe14b2945e69d08b305093908c",
};

const mainRequestHeaders = {
  "User-Agent":
    "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:96.0) Gecko/20100101 Firefox/96.0",
  Accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  "Accept-Language": "en-US,en;q=0.5",
  "Accept-Encoding": "gzip, deflate, br",
  Connection: "keep-alive",
  "Upgrade-Insecure-Requests": "1",
  "Sec-Fetch-Dest": "document",
  "Sec-Fetch-Mode": "navigate",
  "Sec-Fetch-Site": "cross-site",
  "Cache-Control": "max-age=0",
  TE: "trailers",
  Cookie:
    "_gcl_au=1.1.979841104.1644135797; _ga_LF1CBJ6YGW=GS1.1.1644135797.1.1.1644135841.0; _ga=GA1.2.893574668.1644135798; _ga_F6FP8X4R65=GS1.1.1644135797.1.1.1644135841.0; _fbp=fb.1.1644135798699.1146385528; intercom-id-jm2sktyg=16326978-a1a8-4b58-b389-ab0c72053c14; intercom-session-jm2sktyg=; _managebac_session=4TqR4DQjHSb%2BJlvImrDPuvf1ZLyO8qZxqXrpFkIKnqJf2qnlQ5z5PWvVhSux7khnzfjuD7mA0hZvPrUp5kUeXIc%2FstdouFqZ3BVd1PYR%2BJfKYVfVsCDVD1eBiwMzjaE1gOJV2vY5zipyNGT%2Bk%2BOr8mabaz08JhLi9%2BKrRuLD5wvR1Avnz1LXXFKNy2Nf1aC0i5t5SeH77jC9eAWpFasr08FG6zMOqsRr23bBj15xOxjzU6wUUSgxRDV4q7yiLqCTYs%2Bh95GGe1CgcoDJME3nJq8%2B%2FelKLDm4yIRiDqGG8hxyeJazKj1PF8CFjAl1K%2FZRACebbsD4TMr4B46cd2isXSUYuVTCpFRjK7c%2BC7xFIjoqC7obI1LmwDNsMGakXV1zzkcftwyyUegpDN1oYjaacyLOQ6A0VN8tF3JJXqyqzrtoAGSaYP6KXPwzCL96dbwqGUGiGOaPGwOtIgVgO1n%2FY%2Foc1pdAUvFT4tgekfw8c9WBk6TFC1ItaGsbkyPZjHVw55I0SmKTVK0F3Qmq95yqgOLMgNmtAda5BbjpdRuMb43wuOcU3cMNz8CT%2BMiTVmBS%2BCtNtW9X227WJCgP3m8eilhdiGCqZN2lCnW3QayUAsYF2N8Ls%2BjET8YT3K5rqCTnNyrKtFX9pmY%3D--R4XbnbeVW9sQOiy%2B--JO43ueo%2Bo9HFBESCLsmIQg%3D%3D; __utma=58354037.893574668.1644135798.1644135843.1644135843.1; __utmz=58354037.1644135843.1.1.utmcsr=managebac.com|utmccn=(referral)|utmcmd=referral|utmcct=/",
};

export { lessonRequestHeaders, mainRequestHeaders };
