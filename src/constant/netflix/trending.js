const movies = [
	{
		title: "Top Gun Maverick",
		creators: "J.A. Bayona",
		duration: "2h 36m",
		mainThambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABdZPNK6I2duYnFicT7rCZ7rs1ibWl5272PbOfLZS_KT-ExE_RtZ-Eej_fU7vsXl5pkRkmaPJJxlz7vSYEoO2V1EZZP3WKjF_ama1fTg99QskJysOnKbnGtkM73N-94iKWloQe0FDEoMCz3a1dSVUMpDcglclsCjLnhqtShz7-TVdMZ57v5jaS5W-r_bOla8SfntGrSYD6qaV9P5avwL6gjidlZInFz5lWsn7ITfvWpzxtlCiategvU1OmkPPcIAKjbl7SiaD_KCElF2_eLQeGw41ScdQCA.webp?r=007",
		thambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfDeG0Olf5eaACwJyUrIy2EXhi5VoWkQWK9j6XLRPPrGb83Uichh-BmaAhL9y-SlbzjkWirzmSYVkhYiIifriUws04CPE7UY5RAplW8f3awVsrQXm6O4yNa2uciMBptDovqOWPvPIVe_ulU7qQnox-n_jjtAzd-qohDHaAf4Eh9Au0TLoCusUQY6accIM88fp6WGZz0Nd-i1PjiHswI52kMFJgFtD-5daLgwCYV27cMd7z1AqG2vth1aq5Mu0KSKUTd75C3TbhBpgLPbZNrzhoHPOxkq.webp?r=67e",
		titleImage:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfDeG0Olf5eaACwJyUrIy2EXhi5VoWkQWK9j6XLRPPrGb83Uichh-BmaAhL9y-SlbzjkWirzmSYVkhYiIifriUws04CPE7UY5RAplW8f3awVsrQXm6O4yNa2uciMBptDovqOWPvPIVe_ulU7qQnox-n_jjtAzd-qohDHaAf4Eh9Au0TLoCusUQY6accIM88fp6WGZz0Nd-i1PjiHswI52kMFJgFtD-5daLgwCYV27cMd7z1AqG2vth1aq5Mu0KSKUTd75C3TbhBpgLPbZNrzhoHPOxkq.webp?r=67e",
		description:
			"After more than 30 years as one of the Navy's top aviators, Maverick trains a group of Top Gun graduates for a specialized — and dangerous — mission.",
		casts: ["Enzo Vogrincic", "Agustin Pardella", "Matias Recalt"],
		genres: ["Swoonworthy", "Dramas", "Intimate"],
		rating: ["disturbing images", "nudity", "tobacco use"],
	},
	{
		title: "Top Gun Maverick",
		creators: "J.A. Bayona",
		duration: "2h 36m",
		mainThambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABTx_Rd52o331Ldpxs-dHojdSlCsm4rvkn0eAxQpY-qwlry7oDUcRNaia6IEsym7GNTaWl7SD_6OEK0NgpucL2C_W7R0W3l8i-ItN-a-35Th1fyhy1qfsKyvEE0fCfneh7kmGLFMaX_OacpFNYLZ9MhL-9CTJ2TbnUG5DwdWuVfEBWUWscwOyX4NQRXcZZswMRP4c6m7ILnWy6wI5rspkd0WJsOfvS7EM1gd9Sdbqb0a2-0MK1_uwUoY5n5lrW0D_pohUj4XdCby9SV8B4cbhSaNlFKeS1Q.webp?r=70e",
		thambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfDeG0Olf5eaACwJyUrIy2EXhi5VoWkQWK9j6XLRPPrGb83Uichh-BmaAhL9y-SlbzjkWirzmSYVkhYiIifriUws04CPE7UY5RAplW8f3awVsrQXm6O4yNa2uciMBptDovqOWPvPIVe_ulU7qQnox-n_jjtAzd-qohDHaAf4Eh9Au0TLoCusUQY6accIM88fp6WGZz0Nd-i1PjiHswI52kMFJgFtD-5daLgwCYV27cMd7z1AqG2vth1aq5Mu0KSKUTd75C3TbhBpgLPbZNrzhoHPOxkq.webp?r=67e",
		titleImage:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfDeG0Olf5eaACwJyUrIy2EXhi5VoWkQWK9j6XLRPPrGb83Uichh-BmaAhL9y-SlbzjkWirzmSYVkhYiIifriUws04CPE7UY5RAplW8f3awVsrQXm6O4yNa2uciMBptDovqOWPvPIVe_ulU7qQnox-n_jjtAzd-qohDHaAf4Eh9Au0TLoCusUQY6accIM88fp6WGZz0Nd-i1PjiHswI52kMFJgFtD-5daLgwCYV27cMd7z1AqG2vth1aq5Mu0KSKUTd75C3TbhBpgLPbZNrzhoHPOxkq.webp?r=67e",
		description:
			"After more than 30 years as one of the Navy's top aviators, Maverick trains a group of Top Gun graduates for a specialized — and dangerous — mission.",
		casts: ["Enzo Vogrincic", "Agustin Pardella", "Matias Recalt"],
		genres: ["Swoonworthy", "Dramas", "Intimate"],
		rating: ["disturbing images", "nudity", "tobacco use"],
	},
	{
		title: "Top Gun Maverick",
		creators: "J.A. Bayona",
		duration: "2h 11m",
		mainThambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABfGFDUUDZMqFaxuOmz0PukseYvMy9kcOKzwEPTcrYOb-xq5iBx57WfLc46-ly4cqM4_HX-jWPNXe1y0PrgObaPdUWvRHyLP4_BGzRmLp066ENite-s1gr4S1MvHH_W7SHkDcRaTpSpRQvxQvXU1X_fL_tCQcaE3YwreTOEXDpjkAhbd8SQ9LmldWp-oNEytXamc5_vvG-0seOt1mdRs6z6VgBevn1CXt7A2lvU0-LUgzI13DTiAcDjwzlsDtRJT5y0m87q4VKHemusRlTqKMZZp33zj8tQ6S6nCNPIIfx3AYI3d4LDVrDh9Hkw.jpg?r=1fb",
		thambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfDeG0Olf5eaACwJyUrIy2EXhi5VoWkQWK9j6XLRPPrGb83Uichh-BmaAhL9y-SlbzjkWirzmSYVkhYiIifriUws04CPE7UY5RAplW8f3awVsrQXm6O4yNa2uciMBptDovqOWPvPIVe_ulU7qQnox-n_jjtAzd-qohDHaAf4Eh9Au0TLoCusUQY6accIM88fp6WGZz0Nd-i1PjiHswI52kMFJgFtD-5daLgwCYV27cMd7z1AqG2vth1aq5Mu0KSKUTd75C3TbhBpgLPbZNrzhoHPOxkq.webp?r=67e",
		titleImage:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfDeG0Olf5eaACwJyUrIy2EXhi5VoWkQWK9j6XLRPPrGb83Uichh-BmaAhL9y-SlbzjkWirzmSYVkhYiIifriUws04CPE7UY5RAplW8f3awVsrQXm6O4yNa2uciMBptDovqOWPvPIVe_ulU7qQnox-n_jjtAzd-qohDHaAf4Eh9Au0TLoCusUQY6accIM88fp6WGZz0Nd-i1PjiHswI52kMFJgFtD-5daLgwCYV27cMd7z1AqG2vth1aq5Mu0KSKUTd75C3TbhBpgLPbZNrzhoHPOxkq.webp?r=67e",
		description:
			"After more than 30 years as one of the Navy's top aviators, Maverick trains a group of Top Gun graduates for a specialized — and dangerous — mission.",
		casts: ["Enzo Vogrincic", "Agustin Pardella", "Matias Recalt"],
		genres: ["Spanish", "Dramas", "Movies Based on Books"],
		rating: ["disturbing images", "nudity", "tobacco use"],
	},
	{
		title: "Top Gun Maverick",
		creators: "J.A. Bayona",
		duration: "2h 11m",
		mainThambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABWVa88VCL2ROlIELcCrccfVGUbJ2z5V2KHgydJLx_kkNKMPhxiTAsFWUm3o7YI5BtLYk-jEPKRfUcWAYslDMucMlNLzk76HSDAox953FlI1707NuBPqPJDA1PgJU-iK49DUwhUqbmteEf61qNmwnUxrdrUZnULc1kvDa8uiZBw8dZ7XdAck9vQjC6yzqTwf0LM60FTArEz4tfdhd7zuXgyMVqcKjGImxea6gH15K5aq1cw2GXoJWn5xPQUnTXn6AFZ27BSiwCJZbvEHCnDvy_7V3bcWlMYHDGrmf-WRLY70kksyYMovUXk8GVQ.jpg?r=fb5",
		thambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfDeG0Olf5eaACwJyUrIy2EXhi5VoWkQWK9j6XLRPPrGb83Uichh-BmaAhL9y-SlbzjkWirzmSYVkhYiIifriUws04CPE7UY5RAplW8f3awVsrQXm6O4yNa2uciMBptDovqOWPvPIVe_ulU7qQnox-n_jjtAzd-qohDHaAf4Eh9Au0TLoCusUQY6accIM88fp6WGZz0Nd-i1PjiHswI52kMFJgFtD-5daLgwCYV27cMd7z1AqG2vth1aq5Mu0KSKUTd75C3TbhBpgLPbZNrzhoHPOxkq.webp?r=67e",
		titleImage:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfDeG0Olf5eaACwJyUrIy2EXhi5VoWkQWK9j6XLRPPrGb83Uichh-BmaAhL9y-SlbzjkWirzmSYVkhYiIifriUws04CPE7UY5RAplW8f3awVsrQXm6O4yNa2uciMBptDovqOWPvPIVe_ulU7qQnox-n_jjtAzd-qohDHaAf4Eh9Au0TLoCusUQY6accIM88fp6WGZz0Nd-i1PjiHswI52kMFJgFtD-5daLgwCYV27cMd7z1AqG2vth1aq5Mu0KSKUTd75C3TbhBpgLPbZNrzhoHPOxkq.webp?r=67e",
		description:
			"After more than 30 years as one of the Navy's top aviators, Maverick trains a group of Top Gun graduates for a specialized — and dangerous — mission.",
		casts: ["Enzo Vogrincic", "Agustin Pardella", "Matias Recalt"],
		genres: ["Spanish", "Dramas", "Movies Based on Books"],
		rating: ["disturbing images", "nudity", "tobacco use"],
	},
	{
		title: "Top Gun Maverick",
		creators: "J.A. Bayona",
		duration: "2h 11m",
		mainThambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABWX4SoOF08KGXQyU6OF_cwnjOayWbxLgjDa4Skm5lzMC01t1PaEWBS3OJeZDc0FeZ8txXSPsWUe7N6kM2B_eYXLt5uhTXNdLCuwuai6SvRaeWmzfabCTbwmuky1OvJz8iQIG43xiGeeWrUzC3CBwfS_exgn3VFvTGYoC_KG9C4s_bWw3D7NQdRE7sB0fNCeeCs4VcfiXHvO9YTAGueuEklW6sLFuc8MJC_rrn41rmUtuFtbXEMYbp6QkNXRSfWsXiV4-afY8S4WYYtHVR22SMSsSxmS3QmePKM4pBXqggNrsnGrIqY90WEIdEg.jpg?r=680",
		thambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfDeG0Olf5eaACwJyUrIy2EXhi5VoWkQWK9j6XLRPPrGb83Uichh-BmaAhL9y-SlbzjkWirzmSYVkhYiIifriUws04CPE7UY5RAplW8f3awVsrQXm6O4yNa2uciMBptDovqOWPvPIVe_ulU7qQnox-n_jjtAzd-qohDHaAf4Eh9Au0TLoCusUQY6accIM88fp6WGZz0Nd-i1PjiHswI52kMFJgFtD-5daLgwCYV27cMd7z1AqG2vth1aq5Mu0KSKUTd75C3TbhBpgLPbZNrzhoHPOxkq.webp?r=67e",
		titleImage:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfDeG0Olf5eaACwJyUrIy2EXhi5VoWkQWK9j6XLRPPrGb83Uichh-BmaAhL9y-SlbzjkWirzmSYVkhYiIifriUws04CPE7UY5RAplW8f3awVsrQXm6O4yNa2uciMBptDovqOWPvPIVe_ulU7qQnox-n_jjtAzd-qohDHaAf4Eh9Au0TLoCusUQY6accIM88fp6WGZz0Nd-i1PjiHswI52kMFJgFtD-5daLgwCYV27cMd7z1AqG2vth1aq5Mu0KSKUTd75C3TbhBpgLPbZNrzhoHPOxkq.webp?r=67e",
		description:
			"After more than 30 years as one of the Navy's top aviators, Maverick trains a group of Top Gun graduates for a specialized — and dangerous — mission.",
		casts: ["Enzo Vogrincic", "Agustin Pardella", "Matias Recalt"],
		genres: ["Spanish", "Dramas", "Movies Based on Books"],
		rating: ["disturbing images", "nudity", "tobacco use"],
	},
	{
		title: "Top Gun Maverick",
		creators: "J.A. Bayona",
		duration: "2h 11m",
		mainThambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABe4ZNgjsd5jeRpxANy62iHWgS_SsU5w-psDm_r_6ebH350r3XgsjzqMv3Cy-d-QpaivjZLUnACxTuBNava0p_bYpdFNQpN19-aKC17Wkps6PgFkn3h1jhW6xWigT73lUfRUTNio0XXVh4Tgs6aQIOBqLTLQCvCPRvXKqe36PaUYcuj2w8OhODgLRJMWSj25Tw8Lp9hCUWlxUPRgw-U7diZuQJQJwgyhvEmJ0NBr_J_VRWSFlVZV3KvoEVo1pYrCV2icO2sS2S9E-sh2Bgk91W34jAllAiQ.webp?r=23c",
		thambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfDeG0Olf5eaACwJyUrIy2EXhi5VoWkQWK9j6XLRPPrGb83Uichh-BmaAhL9y-SlbzjkWirzmSYVkhYiIifriUws04CPE7UY5RAplW8f3awVsrQXm6O4yNa2uciMBptDovqOWPvPIVe_ulU7qQnox-n_jjtAzd-qohDHaAf4Eh9Au0TLoCusUQY6accIM88fp6WGZz0Nd-i1PjiHswI52kMFJgFtD-5daLgwCYV27cMd7z1AqG2vth1aq5Mu0KSKUTd75C3TbhBpgLPbZNrzhoHPOxkq.webp?r=67e",
		titleImage:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfDeG0Olf5eaACwJyUrIy2EXhi5VoWkQWK9j6XLRPPrGb83Uichh-BmaAhL9y-SlbzjkWirzmSYVkhYiIifriUws04CPE7UY5RAplW8f3awVsrQXm6O4yNa2uciMBptDovqOWPvPIVe_ulU7qQnox-n_jjtAzd-qohDHaAf4Eh9Au0TLoCusUQY6accIM88fp6WGZz0Nd-i1PjiHswI52kMFJgFtD-5daLgwCYV27cMd7z1AqG2vth1aq5Mu0KSKUTd75C3TbhBpgLPbZNrzhoHPOxkq.webp?r=67e",
		description:
			"After more than 30 years as one of the Navy's top aviators, Maverick trains a group of Top Gun graduates for a specialized — and dangerous — mission.",
		casts: ["Enzo Vogrincic", "Agustin Pardella", "Matias Recalt"],
		genres: ["Spanish", "Dramas", "Movies Based on Books"],
		rating: ["disturbing images", "nudity", "tobacco use"],
	},
	{
		title: "Top Gun Maverick",
		creators: "J.A. Bayona",
		duration: "2h 11m",
		mainThambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABS5p7vhhS-Ccj4iGkWNply7Jcz64s8VwGIgwF1uhIe2OLFoTODDUvlkxSnZX9Az_Ynz8r6b4dryvxg362OHBqMWzXy464oAbHQxzgsW5BNuPSHQCLTQ89CsT6L90uwGW5gb0AgFWecM_gQelxg_QPygUN3uPOk1nHILYp2RATxY1ai6EUNHmMME0zHhw462XEgtmJcc6EVXxo_4kHoC8VTKP-VrYzd9KHn9H2Pu228qdNBDhTtRQTOAUPq-tv7Rn4SoEMgf5qPjYDYztRXsdyqzrrbmgEQ.webp?r=ad6",
		thambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfDeG0Olf5eaACwJyUrIy2EXhi5VoWkQWK9j6XLRPPrGb83Uichh-BmaAhL9y-SlbzjkWirzmSYVkhYiIifriUws04CPE7UY5RAplW8f3awVsrQXm6O4yNa2uciMBptDovqOWPvPIVe_ulU7qQnox-n_jjtAzd-qohDHaAf4Eh9Au0TLoCusUQY6accIM88fp6WGZz0Nd-i1PjiHswI52kMFJgFtD-5daLgwCYV27cMd7z1AqG2vth1aq5Mu0KSKUTd75C3TbhBpgLPbZNrzhoHPOxkq.webp?r=67e",
		titleImage:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfDeG0Olf5eaACwJyUrIy2EXhi5VoWkQWK9j6XLRPPrGb83Uichh-BmaAhL9y-SlbzjkWirzmSYVkhYiIifriUws04CPE7UY5RAplW8f3awVsrQXm6O4yNa2uciMBptDovqOWPvPIVe_ulU7qQnox-n_jjtAzd-qohDHaAf4Eh9Au0TLoCusUQY6accIM88fp6WGZz0Nd-i1PjiHswI52kMFJgFtD-5daLgwCYV27cMd7z1AqG2vth1aq5Mu0KSKUTd75C3TbhBpgLPbZNrzhoHPOxkq.webp?r=67e",
		description:
			"After more than 30 years as one of the Navy's top aviators, Maverick trains a group of Top Gun graduates for a specialized — and dangerous — mission.",
		casts: ["Enzo Vogrincic", "Agustin Pardella", "Matias Recalt"],
		genres: ["Spanish", "Dramas", "Movies Based on Books"],
		rating: ["disturbing images", "nudity", "tobacco use"],
	},
	{
		title: "Top Gun Maverick",
		creators: "J.A. Bayona",
		duration: "2h 11m",
		mainThambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABc3xNBVlHocLdopkGADhudanKKdWWuQPmZ7n5ksBR5V8wLfYY0N-AHrQPK520IsUw-WEQazrIg8qyArxM-liQDj4_W8nbYOJ40f1fAusFMAvOlLwIMTUPC6MpqZZfhbVDbYxbHLXDN_q1Qqq2VIRlY5Vh3TXoziyKNQ6K74ilre-5H7hMtybVb6EFkMipK9RZPImni1kpKgxZpyZ_AvuO2ud4CVJF_mO-GvQG2qwgbuwYBfPNiTS5ZjOJcmqhDxfvH6gPViPfkSBUBp-sLY-WqVjB7CpbQ.webp?r=283",
		thambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfDeG0Olf5eaACwJyUrIy2EXhi5VoWkQWK9j6XLRPPrGb83Uichh-BmaAhL9y-SlbzjkWirzmSYVkhYiIifriUws04CPE7UY5RAplW8f3awVsrQXm6O4yNa2uciMBptDovqOWPvPIVe_ulU7qQnox-n_jjtAzd-qohDHaAf4Eh9Au0TLoCusUQY6accIM88fp6WGZz0Nd-i1PjiHswI52kMFJgFtD-5daLgwCYV27cMd7z1AqG2vth1aq5Mu0KSKUTd75C3TbhBpgLPbZNrzhoHPOxkq.webp?r=67e",
		titleImage:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfDeG0Olf5eaACwJyUrIy2EXhi5VoWkQWK9j6XLRPPrGb83Uichh-BmaAhL9y-SlbzjkWirzmSYVkhYiIifriUws04CPE7UY5RAplW8f3awVsrQXm6O4yNa2uciMBptDovqOWPvPIVe_ulU7qQnox-n_jjtAzd-qohDHaAf4Eh9Au0TLoCusUQY6accIM88fp6WGZz0Nd-i1PjiHswI52kMFJgFtD-5daLgwCYV27cMd7z1AqG2vth1aq5Mu0KSKUTd75C3TbhBpgLPbZNrzhoHPOxkq.webp?r=67e",
		description:
			"After more than 30 years as one of the Navy's top aviators, Maverick trains a group of Top Gun graduates for a specialized — and dangerous — mission.",
		casts: ["Enzo Vogrincic", "Agustin Pardella", "Matias Recalt"],
		genres: ["Spanish", "Dramas", "Movies Based on Books"],
		rating: ["disturbing images", "nudity", "tobacco use"],
	},
	{
		title: "Top Gun Maverick",
		creators: "J.A. Bayona",
		duration: "2h 11m",
		mainThambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABRS1kjc8UAVsi6Ls9i9k3fQGSQG7ktR9Lzd49aRAM2-aKDKQym-U42SS_3ckhT_HZrPKiGUC_KQXNWcR8dYLegeZcRuUYIvH-AbvRoQSBcAHvrbOpElxblZk5bDJftSjiIzp-kgYfevKwHEA1pIiGR8uQie2zJaD4-d-bTOqBrzd1zYPvwdgNPS1RVTaqeZMHmi7pWFtfwZBptHYhEYAuEM-solABFMG89az8_PQ3YD9HGRMDLvl7P9EcNEN6ClEoOyy02SNWXZJB2Px9mTuFX_NGX5zAg.webp?r=f2d",
		thambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfDeG0Olf5eaACwJyUrIy2EXhi5VoWkQWK9j6XLRPPrGb83Uichh-BmaAhL9y-SlbzjkWirzmSYVkhYiIifriUws04CPE7UY5RAplW8f3awVsrQXm6O4yNa2uciMBptDovqOWPvPIVe_ulU7qQnox-n_jjtAzd-qohDHaAf4Eh9Au0TLoCusUQY6accIM88fp6WGZz0Nd-i1PjiHswI52kMFJgFtD-5daLgwCYV27cMd7z1AqG2vth1aq5Mu0KSKUTd75C3TbhBpgLPbZNrzhoHPOxkq.webp?r=67e",
		titleImage:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfDeG0Olf5eaACwJyUrIy2EXhi5VoWkQWK9j6XLRPPrGb83Uichh-BmaAhL9y-SlbzjkWirzmSYVkhYiIifriUws04CPE7UY5RAplW8f3awVsrQXm6O4yNa2uciMBptDovqOWPvPIVe_ulU7qQnox-n_jjtAzd-qohDHaAf4Eh9Au0TLoCusUQY6accIM88fp6WGZz0Nd-i1PjiHswI52kMFJgFtD-5daLgwCYV27cMd7z1AqG2vth1aq5Mu0KSKUTd75C3TbhBpgLPbZNrzhoHPOxkq.webp?r=67e",
		description:
			"After more than 30 years as one of the Navy's top aviators, Maverick trains a group of Top Gun graduates for a specialized — and dangerous — mission.",
		casts: ["Enzo Vogrincic", "Agustin Pardella", "Matias Recalt"],
		genres: ["Spanish", "Dramas", "Movies Based on Books"],
		rating: ["disturbing images", "nudity", "tobacco use"],
	},
	{
		title: "Top Gun Maverick",
		creators: "J.A. Bayona",
		duration: "2h 11m",
		mainThambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABWpOgU_ypKqwLmlQGv49_qXnllDXP9c_YJNIKjHjgRDSWhNpBTBZ7miagJI2VhFHUaa2P3opmezPaxC6AQWEam3cV9d2vuJaTQEAVaphpW1ZRUmA76IofB0Y5TD-N5S3C0PXC8LEwlhQaa_cHnFQgTcrciKAe-kHZ2tqiQwpOSvKG_jAS8oCDy_eapEG2duBlkHZmec7P99Im1cRZb_jak8sFjueTxnek50Aw_gYhgsZICa7wBKw5X_d-PQfIMt4fNoSi9tpvt0IiPfRi1-oHqUF-hi5Yw.webp?r=e27",
		thambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfDeG0Olf5eaACwJyUrIy2EXhi5VoWkQWK9j6XLRPPrGb83Uichh-BmaAhL9y-SlbzjkWirzmSYVkhYiIifriUws04CPE7UY5RAplW8f3awVsrQXm6O4yNa2uciMBptDovqOWPvPIVe_ulU7qQnox-n_jjtAzd-qohDHaAf4Eh9Au0TLoCusUQY6accIM88fp6WGZz0Nd-i1PjiHswI52kMFJgFtD-5daLgwCYV27cMd7z1AqG2vth1aq5Mu0KSKUTd75C3TbhBpgLPbZNrzhoHPOxkq.webp?r=67e",
		titleImage:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfDeG0Olf5eaACwJyUrIy2EXhi5VoWkQWK9j6XLRPPrGb83Uichh-BmaAhL9y-SlbzjkWirzmSYVkhYiIifriUws04CPE7UY5RAplW8f3awVsrQXm6O4yNa2uciMBptDovqOWPvPIVe_ulU7qQnox-n_jjtAzd-qohDHaAf4Eh9Au0TLoCusUQY6accIM88fp6WGZz0Nd-i1PjiHswI52kMFJgFtD-5daLgwCYV27cMd7z1AqG2vth1aq5Mu0KSKUTd75C3TbhBpgLPbZNrzhoHPOxkq.webp?r=67e",
		description:
			"After more than 30 years as one of the Navy's top aviators, Maverick trains a group of Top Gun graduates for a specialized — and dangerous — mission.",
		casts: ["Enzo Vogrincic", "Agustin Pardella", "Matias Recalt"],
		genres: ["Spanish", "Dramas", "Movies Based on Books"],
		rating: ["disturbing images", "nudity", "tobacco use"],
	},
];

const shows = [
	{
		title: "Peaky Blinders",
		creators: "Steven Knight",
		mainThambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABcL0rhFhkSElMJ3_b_7nldIlI2reyAMMtH1IJPXWop452QnTqzSyyUsnzTnds6FD7HjaOm9ocSfOcTtRe5TMig8KqdN3QPlgCXpOIxjusVowM1AoncA3PETv_QTLRi7qkF2KPGOs9k_EF2W2P6RyJMnoJUPQm4VTy_s2DEqXGRxD0zIkXep4K_V9KZwCchfWdtVhJzYJtEupMv9Ncp7GkIFfJw_xseNpouKwwZmtFS20TU8Dng3lPE90Kt-QPdmDPr7dJ9Ij_Cm4G8hJqVRwtlNNrkGhANvcZr_5xauSmtwH145xO8SxDfc_xQ.jpg?r=2a7",
		thambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABT_uDyKx4UN-FkQeyfC7pgm0ER5wIFztIR2qDFKCYtsEJfYkr9sA7eu7iZyJFy2jOnsctY44NwFMCYzTYBGBoFXejiDk9nKPDO3n.webp?r=961",
		titleImage:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXATnou9lAifkkwnTkgHnTL843mPJnl8DvLJUNokZkepr5j3IOD75YzbJ956IRYAAVu_Aio8dxLB-iydkmmjoEM0XW9zeLyuEvlKcMi5r2FGeLrdlU1UyX3iLV-EBSkR9NG3iuHMvam8NOxOHc2s8EtmKwbwm8x8zn4mJSwSii0f9G1aeAvM.webp?r=f38",
		description:
			"A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost.",
		casts: ["Cillian Murphy", "Sam Neill", "Helen McCrory"],
		genres: ["TV Dramas", "British", "Period Pieses"],
		rating: [
			"gore",
			"language",
			"nudity",
			"sex",
			"substances",
			"suicide",
			"tobacco use",
			"violence",
		],
		seasons: [
			{
				episodes: [
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZGF2Q8Vlbz7Y_WCYd4jHW0NKm_tcSD7ID5cdfezTToSyuMYnv2193RsfINKA9yHLuyDpSjkOZxLChhFIgECPMgrY65Bw5bsbR26VqXcHyCzr2NSaZtBEysV.webp?r=c76",
						duration: "57m",
						description:
							"Ambitious gang leader Thomas Shelby recognizes an opportunity to move up in the world thanks to a missing crate of guns.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbmQ9vRwoUiJSm_5wWnXUJe5bWfj9Aal-Meu3ocndQq70mm-MpdH4YDsGUFVWa3SFWzekFVti9hyHag-H3E0PBCchMz3ptacbBlaNZYuPdpBOXfcXAnAr3-n.webp?r=c06",
						duration: "57m",
						description:
							"Thomas provokes a local kingpin by fixing a horse race and starts a war with a gypsy family; Inspector Campbell carries out a vicious raid.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSDBlWrDxT5Vzg-oECmGP0pJNftSC_ZFrPFKwY9mcxHicY27p0tdUreXq0vOlTKooVt4L2iCjVdF1LxgzEr1LDm5eCOnKkSs1FKw83K0qfo6C8cvghusL_63.webp?r=b69",
						duration: "55m",
						description:
							"As his war with the Lee family escalates, Thomas harbors suspicions about his brother's fiancée; Campbell pressures the gang to deliver the guns.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbjjeDyfNSIzeow80dL6qKI3_0ujAO7oK-BOs0lR4gdC_QC_PQBH0m4WIprNnshwOkiFTT55gfFdr93O6aPXiXgrGX-ZkaeQVwnWQbjnmh2y-OcchQEmRO8E.webp?r=753",
						duration: "58m",
						description:
							"As his war with the Lee family escalates, Thomas harbors suspicions about his brother's fiancée; Campbell pressures the gang to deliver the guns.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXA4tDpVRtZItVHKH_8LksvPX5CQPvLgwokvE4oELLjDkdsmdZuBd6I2OY6R1RSJNnjyeHjAhff0uQ2XAvYjbwYG57t57LdIAtUNr9I9Ja9ZkN6eqFK525fN.webp?r=a07",
						duration: "56m",
						description:
							"Thomas deals with an IRA chief bent on avenging his cousin's death; Grace must decide whether her loyalties lie with Campbell or Thomas.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWtM-d30zOOd2W8MFheYswFey6wXSmCknE7E6yAiNWTwxKPmhhjc--oAEJzzVYOiSFFclwDNY0Smu5yw_Gvq8Gv28S3BR9KCWAqd_kZ2JG0egHHBIP_XePj3.webp?r=e86",
						duration: "54m",
						description:
							"Thomas prepares to oust Billy Kimber from power, but family secrets that come to light and the obsessed Campbell may prove his undoing.",
					},
				],
			},
			{
				episodes: [
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXbOPYXMVjHhkpx5ZUjv026bNTatezSdL6fZ5V9Isdqo51Ug1pt92ml3hPrz_OHdyQcrjkFr8ch0fRdVcBd_H4J1u7Ll9Z5SYEwkqrGUU0P0VeQYpmqef8b3.webp?r=f51",
						duration: "59m",
						description:
							"When Birmingham crime boss Tommy Shelby's beloved Garrison pub is bombed, he finds himself blackmailed into murdering an Irish dissident.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQm1AGY5HMu_7PHQZ-k3spCV3ky7KvLwt06DRvMVYdaKnbnmvyYoNethvDz66hm9KbfDB20c1X1lj3AFmdruT7igbgcAn1tG3Pn4Y23aZndx1DFztVr43OjV.webp?r=5a6",
						duration: "57m",
						description:
							"After murdering an Irish dissident, Tommy has no choice but to be a pawn in Inspector Campbell's treacherous political game.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZKvDTT8R9VRNZCT6ak786Khtbz29KgZW-xB8Q1JZVj_1OCJrF22yEiwwByMy7P8Hxl0BN5GyYAIe1Rhof49SyOWtRPq7gTzt7Ita-xMZNm9_m29G47sinD5.webp?r=a44",
						duration: "58m",
						description:
							"After joining London crime boss Alfie Solomons in a business venture, Tommy worries that Alfie's newly revealed volatility could pose a problem.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABckq7RYfjIrw3sWQoUjaJuGC3Jp_viDZC8obzX4563MHRSPJF-KUzIPm88t-Xz16oDp7HMCRfnXhy4G6U0TzPUC63piCyjB_Ppi3JkoP0c2RCG9SdKrv6fRJ.webp?r=fba",
						duration: "57m",
						description:
							"The Peaky Blinders take over London's Eden Club; Sabini convinces his old adversary Alfie Solomons to join forces and eradicate the gang.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdzkzfu3plULSDiuyL2KASohL8uuie4IiEDxJtN8PtVEo10BHz4SUb0N9vEKyVMLVxWzmdTGaph6BbmlvXBpeDWi6sTbTD_M-ngIthCUgQgdSDQ9kTdqgfjB.webp?r=63b",
						duration: "58m",
						description:
							"The Peaky Blinders are under attack. Tommy's power base in London is obliterated, and both Arthur and Michael are arrested and imprisoned.",
					},
					{
						name: "Point Three Percent",
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbr5T4sgzlOpqWQRaHyKZBgfuJdnp0syC5EAuopN3aQ3greGmdo07Rlo-ZF4nOGPR5ENwd4_9kvObBplfkK_XN78sBe8dHqEL28e4OKx1rXS1dURfnaY5Ion.webp?r=856",
						duration: "58m",
						description:
							"Tommy plans to execute the mission given to him by Campbell: the assassination of a high-ranking member of the military establishment.",
					},
				],
			},
			{
				episodes: [
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABf0s9VjhkaHYc44v1bpQbyXNhsaFR_TRAg4H_m-Gsm72Mv1qNzTRohXyBbbp6e4YrELXrA5PWfL7wqeZUedpdqeqL8tsrDtg59UMqBWfwPPvQPK-hiR0F-Rx.webp?r=9cd",
						duration: "55m",
						description:
							"On Tommy's wedding day, a new business partner arranges a secret transaction. Arthur has found a godly woman, and Polly meets an attractive man.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSYeDS-5wX5OmuFPQWiCv_Ql8y0S9JXzJmWlDlNyKTHGTuUfWDmJmcLselJkObZLqodIuPio351Foa66euonNatVIudxGn5Mjnui_x-oGf2HkfZsC8ciJXoG.webp?r=58a",
						duration: "57m",
						description:
							"A careless threat sparks a war. Tommy gets a rare form of payment, but his bosses flex their power to keep him in line. Polly commissions a portrait.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABf0eG_5iYO4buy2aBbDy78sQmqc7ILUJ17keoDG83RtrDpoclejH8rgaHjgM8GNNEDBZGIgk5nwLPGowxpx-An4W8oGS43je0MvuguznNTr2j71fyfA6n7Pf.webp?r=18c",
						duration: "58m",
						description:
							"Tommy travels to Wales seeking absolution, and uncovers a traitor in the Economic League. Michael develops a taste for guns. Arthur gets good news.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbKHsKvtWhuRc0YBhPCFx911OJKwdt9Rg1-ObrXw4EzBQMcOK8K1c9bM-o6OYvzluB2TbKT2W5tJpu_CbF6S4bzZavWT9tazjh_Mk0NBmreQ-d1fTxA_8Aix.webp?r=73f",
						duration: "54m",
						description:
							"Polly goes to confession, igniting a chain of events that reveals a trap being laid at the Shelbys' expense. Tommy plans an exit from dirty business.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQUEqSSvnJWZiwxWxr3N6m6E50UYNwzEHMgEnkr4fwQpsOveVwSj6JLlyEdrEIL4GUMAFk4lia5QmAZnMh3VQ8eYpaXk671rEdfLtJn13rDT-nDfo19g6q_v.webp?r=9c7",
						duration: "57m",
						description:
							"Realizing he's being outmaneuvered by the Russians, Tommy seeks help from a former business partner. Polly's new friendship becomes something more.",
					},
					{
						name: "Point Three Percent",
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfwTTmPX8zWe-TGNngUrFsVozQXUKQVgpnuQxjtFEVyM9fibff8LiA1beqeGN3BzuWnYNRZ0pRYEl73ZZ5dABPDSbTTa--mWIZ-noU69PSSrgnbvhrFCS4bt.webp?r=249",
						duration: "57m",
						description:
							"As Tommy prepares to commit the most audacious crime of his career, an unexpected blow forces him to face his worst fears in a race against time.",
					},
				],
			},
		],
	},
	{
		title: "Peaky Blinders",
		creators: "Steven Knight",
		mainThambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABcSCV-U_JS2RBfGn0jBerkheN0sXBHtb1dPiDJJmg43CeQMI323gnRXE8fxkoIKd89LkV_iuuALnBh7Slh9F1-DWNzRoLwNOQXIFVdOgNyhJYW71CpOb8cJZHnreUqFFfWzEUThI0UmnaikhkMI9nyk-srrJssavfceg7sSla2POUYRRIHfU943VAms-Zjl-DWFwzk_A9xfYHBZoLBSo45QfPAp_sFS6RZWtFMGoQ7IefuYtzkk8wB_GmbkmraA1KUm1co7ks5yFwjvWyZnIwgDj1KgObn8XS5Mx81iq35O3BU7CJcbGFaa9xw.jpg?r=bdc",
		thambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABT_uDyKx4UN-FkQeyfC7pgm0ER5wIFztIR2qDFKCYtsEJfYkr9sA7eu7iZyJFy2jOnsctY44NwFMCYzTYBGBoFXejiDk9nKPDO3n.webp?r=961",
		titleImage:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXATnou9lAifkkwnTkgHnTL843mPJnl8DvLJUNokZkepr5j3IOD75YzbJ956IRYAAVu_Aio8dxLB-iydkmmjoEM0XW9zeLyuEvlKcMi5r2FGeLrdlU1UyX3iLV-EBSkR9NG3iuHMvam8NOxOHc2s8EtmKwbwm8x8zn4mJSwSii0f9G1aeAvM.webp?r=f38",
		description:
			"A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost.",
		casts: ["Cillian Murphy", "Sam Neill", "Helen McCrory"],
		genres: ["TV Dramas", "British", "Period Pieses"],
		rating: [
			"gore",
			"language",
			"nudity",
			"sex",
			"substances",
			"suicide",
			"tobacco use",
			"violence",
		],
		seasons: [
			{
				episodes: [
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZGF2Q8Vlbz7Y_WCYd4jHW0NKm_tcSD7ID5cdfezTToSyuMYnv2193RsfINKA9yHLuyDpSjkOZxLChhFIgECPMgrY65Bw5bsbR26VqXcHyCzr2NSaZtBEysV.webp?r=c76",
						duration: "57m",
						description:
							"Ambitious gang leader Thomas Shelby recognizes an opportunity to move up in the world thanks to a missing crate of guns.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbmQ9vRwoUiJSm_5wWnXUJe5bWfj9Aal-Meu3ocndQq70mm-MpdH4YDsGUFVWa3SFWzekFVti9hyHag-H3E0PBCchMz3ptacbBlaNZYuPdpBOXfcXAnAr3-n.webp?r=c06",
						duration: "57m",
						description:
							"Thomas provokes a local kingpin by fixing a horse race and starts a war with a gypsy family; Inspector Campbell carries out a vicious raid.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSDBlWrDxT5Vzg-oECmGP0pJNftSC_ZFrPFKwY9mcxHicY27p0tdUreXq0vOlTKooVt4L2iCjVdF1LxgzEr1LDm5eCOnKkSs1FKw83K0qfo6C8cvghusL_63.webp?r=b69",
						duration: "55m",
						description:
							"As his war with the Lee family escalates, Thomas harbors suspicions about his brother's fiancée; Campbell pressures the gang to deliver the guns.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbjjeDyfNSIzeow80dL6qKI3_0ujAO7oK-BOs0lR4gdC_QC_PQBH0m4WIprNnshwOkiFTT55gfFdr93O6aPXiXgrGX-ZkaeQVwnWQbjnmh2y-OcchQEmRO8E.webp?r=753",
						duration: "58m",
						description:
							"As his war with the Lee family escalates, Thomas harbors suspicions about his brother's fiancée; Campbell pressures the gang to deliver the guns.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXA4tDpVRtZItVHKH_8LksvPX5CQPvLgwokvE4oELLjDkdsmdZuBd6I2OY6R1RSJNnjyeHjAhff0uQ2XAvYjbwYG57t57LdIAtUNr9I9Ja9ZkN6eqFK525fN.webp?r=a07",
						duration: "56m",
						description:
							"Thomas deals with an IRA chief bent on avenging his cousin's death; Grace must decide whether her loyalties lie with Campbell or Thomas.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWtM-d30zOOd2W8MFheYswFey6wXSmCknE7E6yAiNWTwxKPmhhjc--oAEJzzVYOiSFFclwDNY0Smu5yw_Gvq8Gv28S3BR9KCWAqd_kZ2JG0egHHBIP_XePj3.webp?r=e86",
						duration: "54m",
						description:
							"Thomas prepares to oust Billy Kimber from power, but family secrets that come to light and the obsessed Campbell may prove his undoing.",
					},
				],
			},
			{
				episodes: [
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXbOPYXMVjHhkpx5ZUjv026bNTatezSdL6fZ5V9Isdqo51Ug1pt92ml3hPrz_OHdyQcrjkFr8ch0fRdVcBd_H4J1u7Ll9Z5SYEwkqrGUU0P0VeQYpmqef8b3.webp?r=f51",
						duration: "59m",
						description:
							"When Birmingham crime boss Tommy Shelby's beloved Garrison pub is bombed, he finds himself blackmailed into murdering an Irish dissident.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQm1AGY5HMu_7PHQZ-k3spCV3ky7KvLwt06DRvMVYdaKnbnmvyYoNethvDz66hm9KbfDB20c1X1lj3AFmdruT7igbgcAn1tG3Pn4Y23aZndx1DFztVr43OjV.webp?r=5a6",
						duration: "57m",
						description:
							"After murdering an Irish dissident, Tommy has no choice but to be a pawn in Inspector Campbell's treacherous political game.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZKvDTT8R9VRNZCT6ak786Khtbz29KgZW-xB8Q1JZVj_1OCJrF22yEiwwByMy7P8Hxl0BN5GyYAIe1Rhof49SyOWtRPq7gTzt7Ita-xMZNm9_m29G47sinD5.webp?r=a44",
						duration: "58m",
						description:
							"After joining London crime boss Alfie Solomons in a business venture, Tommy worries that Alfie's newly revealed volatility could pose a problem.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABckq7RYfjIrw3sWQoUjaJuGC3Jp_viDZC8obzX4563MHRSPJF-KUzIPm88t-Xz16oDp7HMCRfnXhy4G6U0TzPUC63piCyjB_Ppi3JkoP0c2RCG9SdKrv6fRJ.webp?r=fba",
						duration: "57m",
						description:
							"The Peaky Blinders take over London's Eden Club; Sabini convinces his old adversary Alfie Solomons to join forces and eradicate the gang.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdzkzfu3plULSDiuyL2KASohL8uuie4IiEDxJtN8PtVEo10BHz4SUb0N9vEKyVMLVxWzmdTGaph6BbmlvXBpeDWi6sTbTD_M-ngIthCUgQgdSDQ9kTdqgfjB.webp?r=63b",
						duration: "58m",
						description:
							"The Peaky Blinders are under attack. Tommy's power base in London is obliterated, and both Arthur and Michael are arrested and imprisoned.",
					},
					{
						name: "Point Three Percent",
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbr5T4sgzlOpqWQRaHyKZBgfuJdnp0syC5EAuopN3aQ3greGmdo07Rlo-ZF4nOGPR5ENwd4_9kvObBplfkK_XN78sBe8dHqEL28e4OKx1rXS1dURfnaY5Ion.webp?r=856",
						duration: "58m",
						description:
							"Tommy plans to execute the mission given to him by Campbell: the assassination of a high-ranking member of the military establishment.",
					},
				],
			},
			{
				episodes: [
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABf0s9VjhkaHYc44v1bpQbyXNhsaFR_TRAg4H_m-Gsm72Mv1qNzTRohXyBbbp6e4YrELXrA5PWfL7wqeZUedpdqeqL8tsrDtg59UMqBWfwPPvQPK-hiR0F-Rx.webp?r=9cd",
						duration: "55m",
						description:
							"On Tommy's wedding day, a new business partner arranges a secret transaction. Arthur has found a godly woman, and Polly meets an attractive man.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSYeDS-5wX5OmuFPQWiCv_Ql8y0S9JXzJmWlDlNyKTHGTuUfWDmJmcLselJkObZLqodIuPio351Foa66euonNatVIudxGn5Mjnui_x-oGf2HkfZsC8ciJXoG.webp?r=58a",
						duration: "57m",
						description:
							"A careless threat sparks a war. Tommy gets a rare form of payment, but his bosses flex their power to keep him in line. Polly commissions a portrait.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABf0eG_5iYO4buy2aBbDy78sQmqc7ILUJ17keoDG83RtrDpoclejH8rgaHjgM8GNNEDBZGIgk5nwLPGowxpx-An4W8oGS43je0MvuguznNTr2j71fyfA6n7Pf.webp?r=18c",
						duration: "58m",
						description:
							"Tommy travels to Wales seeking absolution, and uncovers a traitor in the Economic League. Michael develops a taste for guns. Arthur gets good news.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbKHsKvtWhuRc0YBhPCFx911OJKwdt9Rg1-ObrXw4EzBQMcOK8K1c9bM-o6OYvzluB2TbKT2W5tJpu_CbF6S4bzZavWT9tazjh_Mk0NBmreQ-d1fTxA_8Aix.webp?r=73f",
						duration: "54m",
						description:
							"Polly goes to confession, igniting a chain of events that reveals a trap being laid at the Shelbys' expense. Tommy plans an exit from dirty business.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQUEqSSvnJWZiwxWxr3N6m6E50UYNwzEHMgEnkr4fwQpsOveVwSj6JLlyEdrEIL4GUMAFk4lia5QmAZnMh3VQ8eYpaXk671rEdfLtJn13rDT-nDfo19g6q_v.webp?r=9c7",
						duration: "57m",
						description:
							"Realizing he's being outmaneuvered by the Russians, Tommy seeks help from a former business partner. Polly's new friendship becomes something more.",
					},
					{
						name: "Point Three Percent",
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfwTTmPX8zWe-TGNngUrFsVozQXUKQVgpnuQxjtFEVyM9fibff8LiA1beqeGN3BzuWnYNRZ0pRYEl73ZZ5dABPDSbTTa--mWIZ-noU69PSSrgnbvhrFCS4bt.webp?r=249",
						duration: "57m",
						description:
							"As Tommy prepares to commit the most audacious crime of his career, an unexpected blow forces him to face his worst fears in a race against time.",
					},
				],
			},
		],
	},
	{
		title: "Peaky Blinders",
		creators: "Steven Knight",
		mainThambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABak754CaUfit9547TTT4gN57meFnzkOX0JT1rrcfr443lCSB0kftgQ2kXjWoSS2s-ZiorjdkLwpurior1OVfcPmdCIHmpeqoWhCrC83jjWSdFRqqBTD5N_EEkCux52YyUp7Au6lKlTiU0LI3RzBJGiqJ6AmXhfe-i0_h1dg31KaXBTXNOAQm3Qawc_qZTK77Jfb_OsIHXbXsrjjhQQLt2NhIWb6MnOTtCfsO69kf3x4LLz08rvGXKO4CuxzpzfHqo_5X3P2rsgovRyemTn7_k9YK5ErMm7lbEXC8oRbMjWCus5ow9T1RFPxJcQ.jpg?r=05f",
		thambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABT_uDyKx4UN-FkQeyfC7pgm0ER5wIFztIR2qDFKCYtsEJfYkr9sA7eu7iZyJFy2jOnsctY44NwFMCYzTYBGBoFXejiDk9nKPDO3n.webp?r=961",
		titleImage:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXATnou9lAifkkwnTkgHnTL843mPJnl8DvLJUNokZkepr5j3IOD75YzbJ956IRYAAVu_Aio8dxLB-iydkmmjoEM0XW9zeLyuEvlKcMi5r2FGeLrdlU1UyX3iLV-EBSkR9NG3iuHMvam8NOxOHc2s8EtmKwbwm8x8zn4mJSwSii0f9G1aeAvM.webp?r=f38",
		description:
			"A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost.",
		casts: ["Cillian Murphy", "Sam Neill", "Helen McCrory"],
		genres: ["TV Dramas", "British", "Period Pieses"],
		rating: [
			"gore",
			"language",
			"nudity",
			"sex",
			"substances",
			"suicide",
			"tobacco use",
			"violence",
		],
		seasons: [
			{
				episodes: [
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZGF2Q8Vlbz7Y_WCYd4jHW0NKm_tcSD7ID5cdfezTToSyuMYnv2193RsfINKA9yHLuyDpSjkOZxLChhFIgECPMgrY65Bw5bsbR26VqXcHyCzr2NSaZtBEysV.webp?r=c76",
						duration: "57m",
						description:
							"Ambitious gang leader Thomas Shelby recognizes an opportunity to move up in the world thanks to a missing crate of guns.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbmQ9vRwoUiJSm_5wWnXUJe5bWfj9Aal-Meu3ocndQq70mm-MpdH4YDsGUFVWa3SFWzekFVti9hyHag-H3E0PBCchMz3ptacbBlaNZYuPdpBOXfcXAnAr3-n.webp?r=c06",
						duration: "57m",
						description:
							"Thomas provokes a local kingpin by fixing a horse race and starts a war with a gypsy family; Inspector Campbell carries out a vicious raid.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSDBlWrDxT5Vzg-oECmGP0pJNftSC_ZFrPFKwY9mcxHicY27p0tdUreXq0vOlTKooVt4L2iCjVdF1LxgzEr1LDm5eCOnKkSs1FKw83K0qfo6C8cvghusL_63.webp?r=b69",
						duration: "55m",
						description:
							"As his war with the Lee family escalates, Thomas harbors suspicions about his brother's fiancée; Campbell pressures the gang to deliver the guns.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbjjeDyfNSIzeow80dL6qKI3_0ujAO7oK-BOs0lR4gdC_QC_PQBH0m4WIprNnshwOkiFTT55gfFdr93O6aPXiXgrGX-ZkaeQVwnWQbjnmh2y-OcchQEmRO8E.webp?r=753",
						duration: "58m",
						description:
							"As his war with the Lee family escalates, Thomas harbors suspicions about his brother's fiancée; Campbell pressures the gang to deliver the guns.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXA4tDpVRtZItVHKH_8LksvPX5CQPvLgwokvE4oELLjDkdsmdZuBd6I2OY6R1RSJNnjyeHjAhff0uQ2XAvYjbwYG57t57LdIAtUNr9I9Ja9ZkN6eqFK525fN.webp?r=a07",
						duration: "56m",
						description:
							"Thomas deals with an IRA chief bent on avenging his cousin's death; Grace must decide whether her loyalties lie with Campbell or Thomas.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWtM-d30zOOd2W8MFheYswFey6wXSmCknE7E6yAiNWTwxKPmhhjc--oAEJzzVYOiSFFclwDNY0Smu5yw_Gvq8Gv28S3BR9KCWAqd_kZ2JG0egHHBIP_XePj3.webp?r=e86",
						duration: "54m",
						description:
							"Thomas prepares to oust Billy Kimber from power, but family secrets that come to light and the obsessed Campbell may prove his undoing.",
					},
				],
			},
			{
				episodes: [
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXbOPYXMVjHhkpx5ZUjv026bNTatezSdL6fZ5V9Isdqo51Ug1pt92ml3hPrz_OHdyQcrjkFr8ch0fRdVcBd_H4J1u7Ll9Z5SYEwkqrGUU0P0VeQYpmqef8b3.webp?r=f51",
						duration: "59m",
						description:
							"When Birmingham crime boss Tommy Shelby's beloved Garrison pub is bombed, he finds himself blackmailed into murdering an Irish dissident.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQm1AGY5HMu_7PHQZ-k3spCV3ky7KvLwt06DRvMVYdaKnbnmvyYoNethvDz66hm9KbfDB20c1X1lj3AFmdruT7igbgcAn1tG3Pn4Y23aZndx1DFztVr43OjV.webp?r=5a6",
						duration: "57m",
						description:
							"After murdering an Irish dissident, Tommy has no choice but to be a pawn in Inspector Campbell's treacherous political game.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZKvDTT8R9VRNZCT6ak786Khtbz29KgZW-xB8Q1JZVj_1OCJrF22yEiwwByMy7P8Hxl0BN5GyYAIe1Rhof49SyOWtRPq7gTzt7Ita-xMZNm9_m29G47sinD5.webp?r=a44",
						duration: "58m",
						description:
							"After joining London crime boss Alfie Solomons in a business venture, Tommy worries that Alfie's newly revealed volatility could pose a problem.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABckq7RYfjIrw3sWQoUjaJuGC3Jp_viDZC8obzX4563MHRSPJF-KUzIPm88t-Xz16oDp7HMCRfnXhy4G6U0TzPUC63piCyjB_Ppi3JkoP0c2RCG9SdKrv6fRJ.webp?r=fba",
						duration: "57m",
						description:
							"The Peaky Blinders take over London's Eden Club; Sabini convinces his old adversary Alfie Solomons to join forces and eradicate the gang.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdzkzfu3plULSDiuyL2KASohL8uuie4IiEDxJtN8PtVEo10BHz4SUb0N9vEKyVMLVxWzmdTGaph6BbmlvXBpeDWi6sTbTD_M-ngIthCUgQgdSDQ9kTdqgfjB.webp?r=63b",
						duration: "58m",
						description:
							"The Peaky Blinders are under attack. Tommy's power base in London is obliterated, and both Arthur and Michael are arrested and imprisoned.",
					},
					{
						name: "Point Three Percent",
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbr5T4sgzlOpqWQRaHyKZBgfuJdnp0syC5EAuopN3aQ3greGmdo07Rlo-ZF4nOGPR5ENwd4_9kvObBplfkK_XN78sBe8dHqEL28e4OKx1rXS1dURfnaY5Ion.webp?r=856",
						duration: "58m",
						description:
							"Tommy plans to execute the mission given to him by Campbell: the assassination of a high-ranking member of the military establishment.",
					},
				],
			},
			{
				episodes: [
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABf0s9VjhkaHYc44v1bpQbyXNhsaFR_TRAg4H_m-Gsm72Mv1qNzTRohXyBbbp6e4YrELXrA5PWfL7wqeZUedpdqeqL8tsrDtg59UMqBWfwPPvQPK-hiR0F-Rx.webp?r=9cd",
						duration: "55m",
						description:
							"On Tommy's wedding day, a new business partner arranges a secret transaction. Arthur has found a godly woman, and Polly meets an attractive man.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSYeDS-5wX5OmuFPQWiCv_Ql8y0S9JXzJmWlDlNyKTHGTuUfWDmJmcLselJkObZLqodIuPio351Foa66euonNatVIudxGn5Mjnui_x-oGf2HkfZsC8ciJXoG.webp?r=58a",
						duration: "57m",
						description:
							"A careless threat sparks a war. Tommy gets a rare form of payment, but his bosses flex their power to keep him in line. Polly commissions a portrait.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABf0eG_5iYO4buy2aBbDy78sQmqc7ILUJ17keoDG83RtrDpoclejH8rgaHjgM8GNNEDBZGIgk5nwLPGowxpx-An4W8oGS43je0MvuguznNTr2j71fyfA6n7Pf.webp?r=18c",
						duration: "58m",
						description:
							"Tommy travels to Wales seeking absolution, and uncovers a traitor in the Economic League. Michael develops a taste for guns. Arthur gets good news.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbKHsKvtWhuRc0YBhPCFx911OJKwdt9Rg1-ObrXw4EzBQMcOK8K1c9bM-o6OYvzluB2TbKT2W5tJpu_CbF6S4bzZavWT9tazjh_Mk0NBmreQ-d1fTxA_8Aix.webp?r=73f",
						duration: "54m",
						description:
							"Polly goes to confession, igniting a chain of events that reveals a trap being laid at the Shelbys' expense. Tommy plans an exit from dirty business.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQUEqSSvnJWZiwxWxr3N6m6E50UYNwzEHMgEnkr4fwQpsOveVwSj6JLlyEdrEIL4GUMAFk4lia5QmAZnMh3VQ8eYpaXk671rEdfLtJn13rDT-nDfo19g6q_v.webp?r=9c7",
						duration: "57m",
						description:
							"Realizing he's being outmaneuvered by the Russians, Tommy seeks help from a former business partner. Polly's new friendship becomes something more.",
					},
					{
						name: "Point Three Percent",
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfwTTmPX8zWe-TGNngUrFsVozQXUKQVgpnuQxjtFEVyM9fibff8LiA1beqeGN3BzuWnYNRZ0pRYEl73ZZ5dABPDSbTTa--mWIZ-noU69PSSrgnbvhrFCS4bt.webp?r=249",
						duration: "57m",
						description:
							"As Tommy prepares to commit the most audacious crime of his career, an unexpected blow forces him to face his worst fears in a race against time.",
					},
				],
			},
		],
	},
	{
		title: "Peaky Blinders",
		creators: "Steven Knight",
		mainThambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABe5ufQQpSBHHnRpzC8LWxMXwhqiRvD_OUgO4WKvz0QL3L52hhcoc2Ul9g-99laZZQMrLBGSUmdz0VKm26UT0nZaiPR-4RGGLf5_Y7vovT9E3H52kySnc_pJTsa_KwHUNE7vBAA.jpg?r=002",
		thambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABT_uDyKx4UN-FkQeyfC7pgm0ER5wIFztIR2qDFKCYtsEJfYkr9sA7eu7iZyJFy2jOnsctY44NwFMCYzTYBGBoFXejiDk9nKPDO3n.webp?r=961",
		titleImage:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXATnou9lAifkkwnTkgHnTL843mPJnl8DvLJUNokZkepr5j3IOD75YzbJ956IRYAAVu_Aio8dxLB-iydkmmjoEM0XW9zeLyuEvlKcMi5r2FGeLrdlU1UyX3iLV-EBSkR9NG3iuHMvam8NOxOHc2s8EtmKwbwm8x8zn4mJSwSii0f9G1aeAvM.webp?r=f38",
		description:
			"A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost.",
		casts: ["Cillian Murphy", "Sam Neill", "Helen McCrory"],
		genres: ["TV Dramas", "British", "Period Pieses"],
		rating: [
			"gore",
			"language",
			"nudity",
			"sex",
			"substances",
			"suicide",
			"tobacco use",
			"violence",
		],
		seasons: [
			{
				episodes: [
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZGF2Q8Vlbz7Y_WCYd4jHW0NKm_tcSD7ID5cdfezTToSyuMYnv2193RsfINKA9yHLuyDpSjkOZxLChhFIgECPMgrY65Bw5bsbR26VqXcHyCzr2NSaZtBEysV.webp?r=c76",
						duration: "57m",
						description:
							"Ambitious gang leader Thomas Shelby recognizes an opportunity to move up in the world thanks to a missing crate of guns.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbmQ9vRwoUiJSm_5wWnXUJe5bWfj9Aal-Meu3ocndQq70mm-MpdH4YDsGUFVWa3SFWzekFVti9hyHag-H3E0PBCchMz3ptacbBlaNZYuPdpBOXfcXAnAr3-n.webp?r=c06",
						duration: "57m",
						description:
							"Thomas provokes a local kingpin by fixing a horse race and starts a war with a gypsy family; Inspector Campbell carries out a vicious raid.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSDBlWrDxT5Vzg-oECmGP0pJNftSC_ZFrPFKwY9mcxHicY27p0tdUreXq0vOlTKooVt4L2iCjVdF1LxgzEr1LDm5eCOnKkSs1FKw83K0qfo6C8cvghusL_63.webp?r=b69",
						duration: "55m",
						description:
							"As his war with the Lee family escalates, Thomas harbors suspicions about his brother's fiancée; Campbell pressures the gang to deliver the guns.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbjjeDyfNSIzeow80dL6qKI3_0ujAO7oK-BOs0lR4gdC_QC_PQBH0m4WIprNnshwOkiFTT55gfFdr93O6aPXiXgrGX-ZkaeQVwnWQbjnmh2y-OcchQEmRO8E.webp?r=753",
						duration: "58m",
						description:
							"As his war with the Lee family escalates, Thomas harbors suspicions about his brother's fiancée; Campbell pressures the gang to deliver the guns.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXA4tDpVRtZItVHKH_8LksvPX5CQPvLgwokvE4oELLjDkdsmdZuBd6I2OY6R1RSJNnjyeHjAhff0uQ2XAvYjbwYG57t57LdIAtUNr9I9Ja9ZkN6eqFK525fN.webp?r=a07",
						duration: "56m",
						description:
							"Thomas deals with an IRA chief bent on avenging his cousin's death; Grace must decide whether her loyalties lie with Campbell or Thomas.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWtM-d30zOOd2W8MFheYswFey6wXSmCknE7E6yAiNWTwxKPmhhjc--oAEJzzVYOiSFFclwDNY0Smu5yw_Gvq8Gv28S3BR9KCWAqd_kZ2JG0egHHBIP_XePj3.webp?r=e86",
						duration: "54m",
						description:
							"Thomas prepares to oust Billy Kimber from power, but family secrets that come to light and the obsessed Campbell may prove his undoing.",
					},
				],
			},
			{
				episodes: [
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXbOPYXMVjHhkpx5ZUjv026bNTatezSdL6fZ5V9Isdqo51Ug1pt92ml3hPrz_OHdyQcrjkFr8ch0fRdVcBd_H4J1u7Ll9Z5SYEwkqrGUU0P0VeQYpmqef8b3.webp?r=f51",
						duration: "59m",
						description:
							"When Birmingham crime boss Tommy Shelby's beloved Garrison pub is bombed, he finds himself blackmailed into murdering an Irish dissident.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQm1AGY5HMu_7PHQZ-k3spCV3ky7KvLwt06DRvMVYdaKnbnmvyYoNethvDz66hm9KbfDB20c1X1lj3AFmdruT7igbgcAn1tG3Pn4Y23aZndx1DFztVr43OjV.webp?r=5a6",
						duration: "57m",
						description:
							"After murdering an Irish dissident, Tommy has no choice but to be a pawn in Inspector Campbell's treacherous political game.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZKvDTT8R9VRNZCT6ak786Khtbz29KgZW-xB8Q1JZVj_1OCJrF22yEiwwByMy7P8Hxl0BN5GyYAIe1Rhof49SyOWtRPq7gTzt7Ita-xMZNm9_m29G47sinD5.webp?r=a44",
						duration: "58m",
						description:
							"After joining London crime boss Alfie Solomons in a business venture, Tommy worries that Alfie's newly revealed volatility could pose a problem.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABckq7RYfjIrw3sWQoUjaJuGC3Jp_viDZC8obzX4563MHRSPJF-KUzIPm88t-Xz16oDp7HMCRfnXhy4G6U0TzPUC63piCyjB_Ppi3JkoP0c2RCG9SdKrv6fRJ.webp?r=fba",
						duration: "57m",
						description:
							"The Peaky Blinders take over London's Eden Club; Sabini convinces his old adversary Alfie Solomons to join forces and eradicate the gang.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdzkzfu3plULSDiuyL2KASohL8uuie4IiEDxJtN8PtVEo10BHz4SUb0N9vEKyVMLVxWzmdTGaph6BbmlvXBpeDWi6sTbTD_M-ngIthCUgQgdSDQ9kTdqgfjB.webp?r=63b",
						duration: "58m",
						description:
							"The Peaky Blinders are under attack. Tommy's power base in London is obliterated, and both Arthur and Michael are arrested and imprisoned.",
					},
					{
						name: "Point Three Percent",
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbr5T4sgzlOpqWQRaHyKZBgfuJdnp0syC5EAuopN3aQ3greGmdo07Rlo-ZF4nOGPR5ENwd4_9kvObBplfkK_XN78sBe8dHqEL28e4OKx1rXS1dURfnaY5Ion.webp?r=856",
						duration: "58m",
						description:
							"Tommy plans to execute the mission given to him by Campbell: the assassination of a high-ranking member of the military establishment.",
					},
				],
			},
			{
				episodes: [
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABf0s9VjhkaHYc44v1bpQbyXNhsaFR_TRAg4H_m-Gsm72Mv1qNzTRohXyBbbp6e4YrELXrA5PWfL7wqeZUedpdqeqL8tsrDtg59UMqBWfwPPvQPK-hiR0F-Rx.webp?r=9cd",
						duration: "55m",
						description:
							"On Tommy's wedding day, a new business partner arranges a secret transaction. Arthur has found a godly woman, and Polly meets an attractive man.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSYeDS-5wX5OmuFPQWiCv_Ql8y0S9JXzJmWlDlNyKTHGTuUfWDmJmcLselJkObZLqodIuPio351Foa66euonNatVIudxGn5Mjnui_x-oGf2HkfZsC8ciJXoG.webp?r=58a",
						duration: "57m",
						description:
							"A careless threat sparks a war. Tommy gets a rare form of payment, but his bosses flex their power to keep him in line. Polly commissions a portrait.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABf0eG_5iYO4buy2aBbDy78sQmqc7ILUJ17keoDG83RtrDpoclejH8rgaHjgM8GNNEDBZGIgk5nwLPGowxpx-An4W8oGS43je0MvuguznNTr2j71fyfA6n7Pf.webp?r=18c",
						duration: "58m",
						description:
							"Tommy travels to Wales seeking absolution, and uncovers a traitor in the Economic League. Michael develops a taste for guns. Arthur gets good news.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbKHsKvtWhuRc0YBhPCFx911OJKwdt9Rg1-ObrXw4EzBQMcOK8K1c9bM-o6OYvzluB2TbKT2W5tJpu_CbF6S4bzZavWT9tazjh_Mk0NBmreQ-d1fTxA_8Aix.webp?r=73f",
						duration: "54m",
						description:
							"Polly goes to confession, igniting a chain of events that reveals a trap being laid at the Shelbys' expense. Tommy plans an exit from dirty business.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQUEqSSvnJWZiwxWxr3N6m6E50UYNwzEHMgEnkr4fwQpsOveVwSj6JLlyEdrEIL4GUMAFk4lia5QmAZnMh3VQ8eYpaXk671rEdfLtJn13rDT-nDfo19g6q_v.webp?r=9c7",
						duration: "57m",
						description:
							"Realizing he's being outmaneuvered by the Russians, Tommy seeks help from a former business partner. Polly's new friendship becomes something more.",
					},
					{
						name: "Point Three Percent",
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfwTTmPX8zWe-TGNngUrFsVozQXUKQVgpnuQxjtFEVyM9fibff8LiA1beqeGN3BzuWnYNRZ0pRYEl73ZZ5dABPDSbTTa--mWIZ-noU69PSSrgnbvhrFCS4bt.webp?r=249",
						duration: "57m",
						description:
							"As Tommy prepares to commit the most audacious crime of his career, an unexpected blow forces him to face his worst fears in a race against time.",
					},
				],
			},
		],
	},
	{
		title: "Peaky Blinders",
		creators: "Steven Knight",
		mainThambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABXr7c3pRYuNgztHB_4YTCI-x6k4oHMP3XdLUWHRBDTpHGT9C6AlskfG0JT4AXkItGIu2sBIMym_h0KZpOVSOEQdbNqoKyACNv4u4d0QmnQflFPddaJgJlCC8HRi2DJ9gqLJNzYMORNVNO056--f7EEe1Hl8WT4H2R5fBs1zuHSkk9B-4e7wPCjIMBITDr1MVcl-rUVYIayuS-gpgmLB8kP3uCyET1CZ6LzBbf-bCPOwPIcJF_eJaOEmTFW52TE_jpOPbT0Pzdjxzom-rLj2Dx3-hM0WjeD5T3_9vFcWg5VU4NSijkt_LzAwQQY9UctqxYGbMrI6UvKI1HXQrcSnvAoHylurcDDaAgcZBlGew9SlY7_XTUnGlLl3LakyCGo6HofyrcC0JLVbUZWMKkrboQEBSsM8fezzNcJ3MTKj0RQUJ1FgGNQMPGGgPaUVhVsSweFRoVk156w.jpg?r=8f5",
		thambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABT_uDyKx4UN-FkQeyfC7pgm0ER5wIFztIR2qDFKCYtsEJfYkr9sA7eu7iZyJFy2jOnsctY44NwFMCYzTYBGBoFXejiDk9nKPDO3n.webp?r=961",
		titleImage:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXATnou9lAifkkwnTkgHnTL843mPJnl8DvLJUNokZkepr5j3IOD75YzbJ956IRYAAVu_Aio8dxLB-iydkmmjoEM0XW9zeLyuEvlKcMi5r2FGeLrdlU1UyX3iLV-EBSkR9NG3iuHMvam8NOxOHc2s8EtmKwbwm8x8zn4mJSwSii0f9G1aeAvM.webp?r=f38",
		description:
			"A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost.",
		casts: ["Cillian Murphy", "Sam Neill", "Helen McCrory"],
		genres: ["TV Dramas", "British", "Period Pieses"],
		rating: [
			"gore",
			"language",
			"nudity",
			"sex",
			"substances",
			"suicide",
			"tobacco use",
			"violence",
		],
		seasons: [
			{
				episodes: [
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZGF2Q8Vlbz7Y_WCYd4jHW0NKm_tcSD7ID5cdfezTToSyuMYnv2193RsfINKA9yHLuyDpSjkOZxLChhFIgECPMgrY65Bw5bsbR26VqXcHyCzr2NSaZtBEysV.webp?r=c76",
						duration: "57m",
						description:
							"Ambitious gang leader Thomas Shelby recognizes an opportunity to move up in the world thanks to a missing crate of guns.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbmQ9vRwoUiJSm_5wWnXUJe5bWfj9Aal-Meu3ocndQq70mm-MpdH4YDsGUFVWa3SFWzekFVti9hyHag-H3E0PBCchMz3ptacbBlaNZYuPdpBOXfcXAnAr3-n.webp?r=c06",
						duration: "57m",
						description:
							"Thomas provokes a local kingpin by fixing a horse race and starts a war with a gypsy family; Inspector Campbell carries out a vicious raid.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSDBlWrDxT5Vzg-oECmGP0pJNftSC_ZFrPFKwY9mcxHicY27p0tdUreXq0vOlTKooVt4L2iCjVdF1LxgzEr1LDm5eCOnKkSs1FKw83K0qfo6C8cvghusL_63.webp?r=b69",
						duration: "55m",
						description:
							"As his war with the Lee family escalates, Thomas harbors suspicions about his brother's fiancée; Campbell pressures the gang to deliver the guns.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbjjeDyfNSIzeow80dL6qKI3_0ujAO7oK-BOs0lR4gdC_QC_PQBH0m4WIprNnshwOkiFTT55gfFdr93O6aPXiXgrGX-ZkaeQVwnWQbjnmh2y-OcchQEmRO8E.webp?r=753",
						duration: "58m",
						description:
							"As his war with the Lee family escalates, Thomas harbors suspicions about his brother's fiancée; Campbell pressures the gang to deliver the guns.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXA4tDpVRtZItVHKH_8LksvPX5CQPvLgwokvE4oELLjDkdsmdZuBd6I2OY6R1RSJNnjyeHjAhff0uQ2XAvYjbwYG57t57LdIAtUNr9I9Ja9ZkN6eqFK525fN.webp?r=a07",
						duration: "56m",
						description:
							"Thomas deals with an IRA chief bent on avenging his cousin's death; Grace must decide whether her loyalties lie with Campbell or Thomas.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWtM-d30zOOd2W8MFheYswFey6wXSmCknE7E6yAiNWTwxKPmhhjc--oAEJzzVYOiSFFclwDNY0Smu5yw_Gvq8Gv28S3BR9KCWAqd_kZ2JG0egHHBIP_XePj3.webp?r=e86",
						duration: "54m",
						description:
							"Thomas prepares to oust Billy Kimber from power, but family secrets that come to light and the obsessed Campbell may prove his undoing.",
					},
				],
			},
			{
				episodes: [
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXbOPYXMVjHhkpx5ZUjv026bNTatezSdL6fZ5V9Isdqo51Ug1pt92ml3hPrz_OHdyQcrjkFr8ch0fRdVcBd_H4J1u7Ll9Z5SYEwkqrGUU0P0VeQYpmqef8b3.webp?r=f51",
						duration: "59m",
						description:
							"When Birmingham crime boss Tommy Shelby's beloved Garrison pub is bombed, he finds himself blackmailed into murdering an Irish dissident.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQm1AGY5HMu_7PHQZ-k3spCV3ky7KvLwt06DRvMVYdaKnbnmvyYoNethvDz66hm9KbfDB20c1X1lj3AFmdruT7igbgcAn1tG3Pn4Y23aZndx1DFztVr43OjV.webp?r=5a6",
						duration: "57m",
						description:
							"After murdering an Irish dissident, Tommy has no choice but to be a pawn in Inspector Campbell's treacherous political game.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZKvDTT8R9VRNZCT6ak786Khtbz29KgZW-xB8Q1JZVj_1OCJrF22yEiwwByMy7P8Hxl0BN5GyYAIe1Rhof49SyOWtRPq7gTzt7Ita-xMZNm9_m29G47sinD5.webp?r=a44",
						duration: "58m",
						description:
							"After joining London crime boss Alfie Solomons in a business venture, Tommy worries that Alfie's newly revealed volatility could pose a problem.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABckq7RYfjIrw3sWQoUjaJuGC3Jp_viDZC8obzX4563MHRSPJF-KUzIPm88t-Xz16oDp7HMCRfnXhy4G6U0TzPUC63piCyjB_Ppi3JkoP0c2RCG9SdKrv6fRJ.webp?r=fba",
						duration: "57m",
						description:
							"The Peaky Blinders take over London's Eden Club; Sabini convinces his old adversary Alfie Solomons to join forces and eradicate the gang.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdzkzfu3plULSDiuyL2KASohL8uuie4IiEDxJtN8PtVEo10BHz4SUb0N9vEKyVMLVxWzmdTGaph6BbmlvXBpeDWi6sTbTD_M-ngIthCUgQgdSDQ9kTdqgfjB.webp?r=63b",
						duration: "58m",
						description:
							"The Peaky Blinders are under attack. Tommy's power base in London is obliterated, and both Arthur and Michael are arrested and imprisoned.",
					},
					{
						name: "Point Three Percent",
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbr5T4sgzlOpqWQRaHyKZBgfuJdnp0syC5EAuopN3aQ3greGmdo07Rlo-ZF4nOGPR5ENwd4_9kvObBplfkK_XN78sBe8dHqEL28e4OKx1rXS1dURfnaY5Ion.webp?r=856",
						duration: "58m",
						description:
							"Tommy plans to execute the mission given to him by Campbell: the assassination of a high-ranking member of the military establishment.",
					},
				],
			},
			{
				episodes: [
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABf0s9VjhkaHYc44v1bpQbyXNhsaFR_TRAg4H_m-Gsm72Mv1qNzTRohXyBbbp6e4YrELXrA5PWfL7wqeZUedpdqeqL8tsrDtg59UMqBWfwPPvQPK-hiR0F-Rx.webp?r=9cd",
						duration: "55m",
						description:
							"On Tommy's wedding day, a new business partner arranges a secret transaction. Arthur has found a godly woman, and Polly meets an attractive man.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSYeDS-5wX5OmuFPQWiCv_Ql8y0S9JXzJmWlDlNyKTHGTuUfWDmJmcLselJkObZLqodIuPio351Foa66euonNatVIudxGn5Mjnui_x-oGf2HkfZsC8ciJXoG.webp?r=58a",
						duration: "57m",
						description:
							"A careless threat sparks a war. Tommy gets a rare form of payment, but his bosses flex their power to keep him in line. Polly commissions a portrait.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABf0eG_5iYO4buy2aBbDy78sQmqc7ILUJ17keoDG83RtrDpoclejH8rgaHjgM8GNNEDBZGIgk5nwLPGowxpx-An4W8oGS43je0MvuguznNTr2j71fyfA6n7Pf.webp?r=18c",
						duration: "58m",
						description:
							"Tommy travels to Wales seeking absolution, and uncovers a traitor in the Economic League. Michael develops a taste for guns. Arthur gets good news.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbKHsKvtWhuRc0YBhPCFx911OJKwdt9Rg1-ObrXw4EzBQMcOK8K1c9bM-o6OYvzluB2TbKT2W5tJpu_CbF6S4bzZavWT9tazjh_Mk0NBmreQ-d1fTxA_8Aix.webp?r=73f",
						duration: "54m",
						description:
							"Polly goes to confession, igniting a chain of events that reveals a trap being laid at the Shelbys' expense. Tommy plans an exit from dirty business.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQUEqSSvnJWZiwxWxr3N6m6E50UYNwzEHMgEnkr4fwQpsOveVwSj6JLlyEdrEIL4GUMAFk4lia5QmAZnMh3VQ8eYpaXk671rEdfLtJn13rDT-nDfo19g6q_v.webp?r=9c7",
						duration: "57m",
						description:
							"Realizing he's being outmaneuvered by the Russians, Tommy seeks help from a former business partner. Polly's new friendship becomes something more.",
					},
					{
						name: "Point Three Percent",
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfwTTmPX8zWe-TGNngUrFsVozQXUKQVgpnuQxjtFEVyM9fibff8LiA1beqeGN3BzuWnYNRZ0pRYEl73ZZ5dABPDSbTTa--mWIZ-noU69PSSrgnbvhrFCS4bt.webp?r=249",
						duration: "57m",
						description:
							"As Tommy prepares to commit the most audacious crime of his career, an unexpected blow forces him to face his worst fears in a race against time.",
					},
				],
			},
		],
	},
	{
		title: "Peaky Blinders",
		creators: "Steven Knight",
		mainThambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABXTJRlxVjTx3uQE5ItKagyfKeTxgXuXf0EHjWbCVh4-bm7U4W5gnJFhERHEGEFLI6FC-6BYfABWbMXGS5m_rQUMPtF2HxofZPrfiEN8U2Rn2njlzrM-d-jlImky7XROKPMZgfju-H40RbkJUUImQvug7pzGgc7jVkTk76gGriy4CNDhCHMvmk5SpvFj4z_F4b_Ya6aXEb0E8_VY3neYaZAnl9FIWTnxs9jJhb6uCIIgytlkmeZPEEMQN8Sx28VtH4UEQqKtplUST1T-a1FEjWZif5X2ioI2mhMuSC5IDiZ80QeZV8eJUa5GLsdHTUFkHzTNIOmSMLlLZRbV1LIPnE-KrnmbeAeMSjrtp5lKekbgMhS3neD6vudfLx8utziuzKHHIccVy4OtjAebbDiBn9grLOzxtx8snfO9BHZMth0SBArqoSa8bbXNEG2izqs7gPkjZCGvHTQ.jpg?r=479",
		thambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABT_uDyKx4UN-FkQeyfC7pgm0ER5wIFztIR2qDFKCYtsEJfYkr9sA7eu7iZyJFy2jOnsctY44NwFMCYzTYBGBoFXejiDk9nKPDO3n.webp?r=961",
		titleImage:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXATnou9lAifkkwnTkgHnTL843mPJnl8DvLJUNokZkepr5j3IOD75YzbJ956IRYAAVu_Aio8dxLB-iydkmmjoEM0XW9zeLyuEvlKcMi5r2FGeLrdlU1UyX3iLV-EBSkR9NG3iuHMvam8NOxOHc2s8EtmKwbwm8x8zn4mJSwSii0f9G1aeAvM.webp?r=f38",
		description:
			"A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost.",
		casts: ["Cillian Murphy", "Sam Neill", "Helen McCrory"],
		genres: ["TV Dramas", "British", "Period Pieses"],
		rating: [
			"gore",
			"language",
			"nudity",
			"sex",
			"substances",
			"suicide",
			"tobacco use",
			"violence",
		],
		seasons: [
			{
				episodes: [
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZGF2Q8Vlbz7Y_WCYd4jHW0NKm_tcSD7ID5cdfezTToSyuMYnv2193RsfINKA9yHLuyDpSjkOZxLChhFIgECPMgrY65Bw5bsbR26VqXcHyCzr2NSaZtBEysV.webp?r=c76",
						duration: "57m",
						description:
							"Ambitious gang leader Thomas Shelby recognizes an opportunity to move up in the world thanks to a missing crate of guns.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbmQ9vRwoUiJSm_5wWnXUJe5bWfj9Aal-Meu3ocndQq70mm-MpdH4YDsGUFVWa3SFWzekFVti9hyHag-H3E0PBCchMz3ptacbBlaNZYuPdpBOXfcXAnAr3-n.webp?r=c06",
						duration: "57m",
						description:
							"Thomas provokes a local kingpin by fixing a horse race and starts a war with a gypsy family; Inspector Campbell carries out a vicious raid.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSDBlWrDxT5Vzg-oECmGP0pJNftSC_ZFrPFKwY9mcxHicY27p0tdUreXq0vOlTKooVt4L2iCjVdF1LxgzEr1LDm5eCOnKkSs1FKw83K0qfo6C8cvghusL_63.webp?r=b69",
						duration: "55m",
						description:
							"As his war with the Lee family escalates, Thomas harbors suspicions about his brother's fiancée; Campbell pressures the gang to deliver the guns.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbjjeDyfNSIzeow80dL6qKI3_0ujAO7oK-BOs0lR4gdC_QC_PQBH0m4WIprNnshwOkiFTT55gfFdr93O6aPXiXgrGX-ZkaeQVwnWQbjnmh2y-OcchQEmRO8E.webp?r=753",
						duration: "58m",
						description:
							"As his war with the Lee family escalates, Thomas harbors suspicions about his brother's fiancée; Campbell pressures the gang to deliver the guns.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXA4tDpVRtZItVHKH_8LksvPX5CQPvLgwokvE4oELLjDkdsmdZuBd6I2OY6R1RSJNnjyeHjAhff0uQ2XAvYjbwYG57t57LdIAtUNr9I9Ja9ZkN6eqFK525fN.webp?r=a07",
						duration: "56m",
						description:
							"Thomas deals with an IRA chief bent on avenging his cousin's death; Grace must decide whether her loyalties lie with Campbell or Thomas.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWtM-d30zOOd2W8MFheYswFey6wXSmCknE7E6yAiNWTwxKPmhhjc--oAEJzzVYOiSFFclwDNY0Smu5yw_Gvq8Gv28S3BR9KCWAqd_kZ2JG0egHHBIP_XePj3.webp?r=e86",
						duration: "54m",
						description:
							"Thomas prepares to oust Billy Kimber from power, but family secrets that come to light and the obsessed Campbell may prove his undoing.",
					},
				],
			},
			{
				episodes: [
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXbOPYXMVjHhkpx5ZUjv026bNTatezSdL6fZ5V9Isdqo51Ug1pt92ml3hPrz_OHdyQcrjkFr8ch0fRdVcBd_H4J1u7Ll9Z5SYEwkqrGUU0P0VeQYpmqef8b3.webp?r=f51",
						duration: "59m",
						description:
							"When Birmingham crime boss Tommy Shelby's beloved Garrison pub is bombed, he finds himself blackmailed into murdering an Irish dissident.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQm1AGY5HMu_7PHQZ-k3spCV3ky7KvLwt06DRvMVYdaKnbnmvyYoNethvDz66hm9KbfDB20c1X1lj3AFmdruT7igbgcAn1tG3Pn4Y23aZndx1DFztVr43OjV.webp?r=5a6",
						duration: "57m",
						description:
							"After murdering an Irish dissident, Tommy has no choice but to be a pawn in Inspector Campbell's treacherous political game.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZKvDTT8R9VRNZCT6ak786Khtbz29KgZW-xB8Q1JZVj_1OCJrF22yEiwwByMy7P8Hxl0BN5GyYAIe1Rhof49SyOWtRPq7gTzt7Ita-xMZNm9_m29G47sinD5.webp?r=a44",
						duration: "58m",
						description:
							"After joining London crime boss Alfie Solomons in a business venture, Tommy worries that Alfie's newly revealed volatility could pose a problem.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABckq7RYfjIrw3sWQoUjaJuGC3Jp_viDZC8obzX4563MHRSPJF-KUzIPm88t-Xz16oDp7HMCRfnXhy4G6U0TzPUC63piCyjB_Ppi3JkoP0c2RCG9SdKrv6fRJ.webp?r=fba",
						duration: "57m",
						description:
							"The Peaky Blinders take over London's Eden Club; Sabini convinces his old adversary Alfie Solomons to join forces and eradicate the gang.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdzkzfu3plULSDiuyL2KASohL8uuie4IiEDxJtN8PtVEo10BHz4SUb0N9vEKyVMLVxWzmdTGaph6BbmlvXBpeDWi6sTbTD_M-ngIthCUgQgdSDQ9kTdqgfjB.webp?r=63b",
						duration: "58m",
						description:
							"The Peaky Blinders are under attack. Tommy's power base in London is obliterated, and both Arthur and Michael are arrested and imprisoned.",
					},
					{
						name: "Point Three Percent",
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbr5T4sgzlOpqWQRaHyKZBgfuJdnp0syC5EAuopN3aQ3greGmdo07Rlo-ZF4nOGPR5ENwd4_9kvObBplfkK_XN78sBe8dHqEL28e4OKx1rXS1dURfnaY5Ion.webp?r=856",
						duration: "58m",
						description:
							"Tommy plans to execute the mission given to him by Campbell: the assassination of a high-ranking member of the military establishment.",
					},
				],
			},
			{
				episodes: [
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABf0s9VjhkaHYc44v1bpQbyXNhsaFR_TRAg4H_m-Gsm72Mv1qNzTRohXyBbbp6e4YrELXrA5PWfL7wqeZUedpdqeqL8tsrDtg59UMqBWfwPPvQPK-hiR0F-Rx.webp?r=9cd",
						duration: "55m",
						description:
							"On Tommy's wedding day, a new business partner arranges a secret transaction. Arthur has found a godly woman, and Polly meets an attractive man.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSYeDS-5wX5OmuFPQWiCv_Ql8y0S9JXzJmWlDlNyKTHGTuUfWDmJmcLselJkObZLqodIuPio351Foa66euonNatVIudxGn5Mjnui_x-oGf2HkfZsC8ciJXoG.webp?r=58a",
						duration: "57m",
						description:
							"A careless threat sparks a war. Tommy gets a rare form of payment, but his bosses flex their power to keep him in line. Polly commissions a portrait.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABf0eG_5iYO4buy2aBbDy78sQmqc7ILUJ17keoDG83RtrDpoclejH8rgaHjgM8GNNEDBZGIgk5nwLPGowxpx-An4W8oGS43je0MvuguznNTr2j71fyfA6n7Pf.webp?r=18c",
						duration: "58m",
						description:
							"Tommy travels to Wales seeking absolution, and uncovers a traitor in the Economic League. Michael develops a taste for guns. Arthur gets good news.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbKHsKvtWhuRc0YBhPCFx911OJKwdt9Rg1-ObrXw4EzBQMcOK8K1c9bM-o6OYvzluB2TbKT2W5tJpu_CbF6S4bzZavWT9tazjh_Mk0NBmreQ-d1fTxA_8Aix.webp?r=73f",
						duration: "54m",
						description:
							"Polly goes to confession, igniting a chain of events that reveals a trap being laid at the Shelbys' expense. Tommy plans an exit from dirty business.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQUEqSSvnJWZiwxWxr3N6m6E50UYNwzEHMgEnkr4fwQpsOveVwSj6JLlyEdrEIL4GUMAFk4lia5QmAZnMh3VQ8eYpaXk671rEdfLtJn13rDT-nDfo19g6q_v.webp?r=9c7",
						duration: "57m",
						description:
							"Realizing he's being outmaneuvered by the Russians, Tommy seeks help from a former business partner. Polly's new friendship becomes something more.",
					},
					{
						name: "Point Three Percent",
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfwTTmPX8zWe-TGNngUrFsVozQXUKQVgpnuQxjtFEVyM9fibff8LiA1beqeGN3BzuWnYNRZ0pRYEl73ZZ5dABPDSbTTa--mWIZ-noU69PSSrgnbvhrFCS4bt.webp?r=249",
						duration: "57m",
						description:
							"As Tommy prepares to commit the most audacious crime of his career, an unexpected blow forces him to face his worst fears in a race against time.",
					},
				],
			},
		],
	},
	{
		title: "Peaky Blinders",
		creators: "Steven Knight",
		mainThambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABWRe8WLChkDjMaC6AeLWVm98-GS--9zjMHisy3mw99GbFddlIS5wl96iqq26OBfzvh4cGK2txcqhNR4-OQh59_gveNbVXxLHjg7Yk2oHWr5Vm5a90Hdhco07KljJq8Ujr0_XKRfR6zffl6u92jmGdJrUy2zfOMnYAC74ShVScUnDpHXMEi996l2hIP-Mcz_BVTHupg7Na2t1IP8WmHgRFlpeGnLxll3IGMoDlB2uGNRH8PsiXovOmy0ubjU9idlF7RSsQtIx_3ryGL7e3Mtn43ylZbtxKZuhQVf7vAnZPtvF19yl-njlaij7EQBIVMEry9oG2Ns5pKXm9Ts8AVteSiHHGCvZpEPwyj5NJuXtZudZm8leSso9kErsN05N_BSffp4fluub6ISvqil5x9c0TXjSxK_RmeEvAQUXfLFt_5HeJQzUqA8Hz_OMVVpaGPA_qg1Di_Uuxw.jpg?r=259",
		thambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABT_uDyKx4UN-FkQeyfC7pgm0ER5wIFztIR2qDFKCYtsEJfYkr9sA7eu7iZyJFy2jOnsctY44NwFMCYzTYBGBoFXejiDk9nKPDO3n.webp?r=961",
		titleImage:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXATnou9lAifkkwnTkgHnTL843mPJnl8DvLJUNokZkepr5j3IOD75YzbJ956IRYAAVu_Aio8dxLB-iydkmmjoEM0XW9zeLyuEvlKcMi5r2FGeLrdlU1UyX3iLV-EBSkR9NG3iuHMvam8NOxOHc2s8EtmKwbwm8x8zn4mJSwSii0f9G1aeAvM.webp?r=f38",
		description:
			"A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost.",
		casts: ["Cillian Murphy", "Sam Neill", "Helen McCrory"],
		genres: ["TV Dramas", "British", "Period Pieses"],
		rating: [
			"gore",
			"language",
			"nudity",
			"sex",
			"substances",
			"suicide",
			"tobacco use",
			"violence",
		],
		seasons: [
			{
				episodes: [
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZGF2Q8Vlbz7Y_WCYd4jHW0NKm_tcSD7ID5cdfezTToSyuMYnv2193RsfINKA9yHLuyDpSjkOZxLChhFIgECPMgrY65Bw5bsbR26VqXcHyCzr2NSaZtBEysV.webp?r=c76",
						duration: "57m",
						description:
							"Ambitious gang leader Thomas Shelby recognizes an opportunity to move up in the world thanks to a missing crate of guns.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbmQ9vRwoUiJSm_5wWnXUJe5bWfj9Aal-Meu3ocndQq70mm-MpdH4YDsGUFVWa3SFWzekFVti9hyHag-H3E0PBCchMz3ptacbBlaNZYuPdpBOXfcXAnAr3-n.webp?r=c06",
						duration: "57m",
						description:
							"Thomas provokes a local kingpin by fixing a horse race and starts a war with a gypsy family; Inspector Campbell carries out a vicious raid.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSDBlWrDxT5Vzg-oECmGP0pJNftSC_ZFrPFKwY9mcxHicY27p0tdUreXq0vOlTKooVt4L2iCjVdF1LxgzEr1LDm5eCOnKkSs1FKw83K0qfo6C8cvghusL_63.webp?r=b69",
						duration: "55m",
						description:
							"As his war with the Lee family escalates, Thomas harbors suspicions about his brother's fiancée; Campbell pressures the gang to deliver the guns.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbjjeDyfNSIzeow80dL6qKI3_0ujAO7oK-BOs0lR4gdC_QC_PQBH0m4WIprNnshwOkiFTT55gfFdr93O6aPXiXgrGX-ZkaeQVwnWQbjnmh2y-OcchQEmRO8E.webp?r=753",
						duration: "58m",
						description:
							"As his war with the Lee family escalates, Thomas harbors suspicions about his brother's fiancée; Campbell pressures the gang to deliver the guns.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXA4tDpVRtZItVHKH_8LksvPX5CQPvLgwokvE4oELLjDkdsmdZuBd6I2OY6R1RSJNnjyeHjAhff0uQ2XAvYjbwYG57t57LdIAtUNr9I9Ja9ZkN6eqFK525fN.webp?r=a07",
						duration: "56m",
						description:
							"Thomas deals with an IRA chief bent on avenging his cousin's death; Grace must decide whether her loyalties lie with Campbell or Thomas.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWtM-d30zOOd2W8MFheYswFey6wXSmCknE7E6yAiNWTwxKPmhhjc--oAEJzzVYOiSFFclwDNY0Smu5yw_Gvq8Gv28S3BR9KCWAqd_kZ2JG0egHHBIP_XePj3.webp?r=e86",
						duration: "54m",
						description:
							"Thomas prepares to oust Billy Kimber from power, but family secrets that come to light and the obsessed Campbell may prove his undoing.",
					},
				],
			},
			{
				episodes: [
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXbOPYXMVjHhkpx5ZUjv026bNTatezSdL6fZ5V9Isdqo51Ug1pt92ml3hPrz_OHdyQcrjkFr8ch0fRdVcBd_H4J1u7Ll9Z5SYEwkqrGUU0P0VeQYpmqef8b3.webp?r=f51",
						duration: "59m",
						description:
							"When Birmingham crime boss Tommy Shelby's beloved Garrison pub is bombed, he finds himself blackmailed into murdering an Irish dissident.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQm1AGY5HMu_7PHQZ-k3spCV3ky7KvLwt06DRvMVYdaKnbnmvyYoNethvDz66hm9KbfDB20c1X1lj3AFmdruT7igbgcAn1tG3Pn4Y23aZndx1DFztVr43OjV.webp?r=5a6",
						duration: "57m",
						description:
							"After murdering an Irish dissident, Tommy has no choice but to be a pawn in Inspector Campbell's treacherous political game.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZKvDTT8R9VRNZCT6ak786Khtbz29KgZW-xB8Q1JZVj_1OCJrF22yEiwwByMy7P8Hxl0BN5GyYAIe1Rhof49SyOWtRPq7gTzt7Ita-xMZNm9_m29G47sinD5.webp?r=a44",
						duration: "58m",
						description:
							"After joining London crime boss Alfie Solomons in a business venture, Tommy worries that Alfie's newly revealed volatility could pose a problem.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABckq7RYfjIrw3sWQoUjaJuGC3Jp_viDZC8obzX4563MHRSPJF-KUzIPm88t-Xz16oDp7HMCRfnXhy4G6U0TzPUC63piCyjB_Ppi3JkoP0c2RCG9SdKrv6fRJ.webp?r=fba",
						duration: "57m",
						description:
							"The Peaky Blinders take over London's Eden Club; Sabini convinces his old adversary Alfie Solomons to join forces and eradicate the gang.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdzkzfu3plULSDiuyL2KASohL8uuie4IiEDxJtN8PtVEo10BHz4SUb0N9vEKyVMLVxWzmdTGaph6BbmlvXBpeDWi6sTbTD_M-ngIthCUgQgdSDQ9kTdqgfjB.webp?r=63b",
						duration: "58m",
						description:
							"The Peaky Blinders are under attack. Tommy's power base in London is obliterated, and both Arthur and Michael are arrested and imprisoned.",
					},
					{
						name: "Point Three Percent",
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbr5T4sgzlOpqWQRaHyKZBgfuJdnp0syC5EAuopN3aQ3greGmdo07Rlo-ZF4nOGPR5ENwd4_9kvObBplfkK_XN78sBe8dHqEL28e4OKx1rXS1dURfnaY5Ion.webp?r=856",
						duration: "58m",
						description:
							"Tommy plans to execute the mission given to him by Campbell: the assassination of a high-ranking member of the military establishment.",
					},
				],
			},
			{
				episodes: [
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABf0s9VjhkaHYc44v1bpQbyXNhsaFR_TRAg4H_m-Gsm72Mv1qNzTRohXyBbbp6e4YrELXrA5PWfL7wqeZUedpdqeqL8tsrDtg59UMqBWfwPPvQPK-hiR0F-Rx.webp?r=9cd",
						duration: "55m",
						description:
							"On Tommy's wedding day, a new business partner arranges a secret transaction. Arthur has found a godly woman, and Polly meets an attractive man.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSYeDS-5wX5OmuFPQWiCv_Ql8y0S9JXzJmWlDlNyKTHGTuUfWDmJmcLselJkObZLqodIuPio351Foa66euonNatVIudxGn5Mjnui_x-oGf2HkfZsC8ciJXoG.webp?r=58a",
						duration: "57m",
						description:
							"A careless threat sparks a war. Tommy gets a rare form of payment, but his bosses flex their power to keep him in line. Polly commissions a portrait.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABf0eG_5iYO4buy2aBbDy78sQmqc7ILUJ17keoDG83RtrDpoclejH8rgaHjgM8GNNEDBZGIgk5nwLPGowxpx-An4W8oGS43je0MvuguznNTr2j71fyfA6n7Pf.webp?r=18c",
						duration: "58m",
						description:
							"Tommy travels to Wales seeking absolution, and uncovers a traitor in the Economic League. Michael develops a taste for guns. Arthur gets good news.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbKHsKvtWhuRc0YBhPCFx911OJKwdt9Rg1-ObrXw4EzBQMcOK8K1c9bM-o6OYvzluB2TbKT2W5tJpu_CbF6S4bzZavWT9tazjh_Mk0NBmreQ-d1fTxA_8Aix.webp?r=73f",
						duration: "54m",
						description:
							"Polly goes to confession, igniting a chain of events that reveals a trap being laid at the Shelbys' expense. Tommy plans an exit from dirty business.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQUEqSSvnJWZiwxWxr3N6m6E50UYNwzEHMgEnkr4fwQpsOveVwSj6JLlyEdrEIL4GUMAFk4lia5QmAZnMh3VQ8eYpaXk671rEdfLtJn13rDT-nDfo19g6q_v.webp?r=9c7",
						duration: "57m",
						description:
							"Realizing he's being outmaneuvered by the Russians, Tommy seeks help from a former business partner. Polly's new friendship becomes something more.",
					},
					{
						name: "Point Three Percent",
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfwTTmPX8zWe-TGNngUrFsVozQXUKQVgpnuQxjtFEVyM9fibff8LiA1beqeGN3BzuWnYNRZ0pRYEl73ZZ5dABPDSbTTa--mWIZ-noU69PSSrgnbvhrFCS4bt.webp?r=249",
						duration: "57m",
						description:
							"As Tommy prepares to commit the most audacious crime of his career, an unexpected blow forces him to face his worst fears in a race against time.",
					},
				],
			},
		],
	},
	{
		title: "Peaky Blinders",
		creators: "Steven Knight",
		mainThambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABczunYShYIO20bZhaOqUTVI0r_D7YDDeXF4T2tCwGDFVVuPacxgqoy_GJZNi49uO9rPl823adfMqCvMEnjfmI9I092JEh7Pjw57I2YxSpOn7RN9Ztmj5ttET4l6jUik0FYOyfg.jpg?r=a3a",
		thambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABT_uDyKx4UN-FkQeyfC7pgm0ER5wIFztIR2qDFKCYtsEJfYkr9sA7eu7iZyJFy2jOnsctY44NwFMCYzTYBGBoFXejiDk9nKPDO3n.webp?r=961",
		titleImage:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXATnou9lAifkkwnTkgHnTL843mPJnl8DvLJUNokZkepr5j3IOD75YzbJ956IRYAAVu_Aio8dxLB-iydkmmjoEM0XW9zeLyuEvlKcMi5r2FGeLrdlU1UyX3iLV-EBSkR9NG3iuHMvam8NOxOHc2s8EtmKwbwm8x8zn4mJSwSii0f9G1aeAvM.webp?r=f38",
		description:
			"A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost.",
		casts: ["Cillian Murphy", "Sam Neill", "Helen McCrory"],
		genres: ["TV Dramas", "British", "Period Pieses"],
		rating: [
			"gore",
			"language",
			"nudity",
			"sex",
			"substances",
			"suicide",
			"tobacco use",
			"violence",
		],
		seasons: [
			{
				episodes: [
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZGF2Q8Vlbz7Y_WCYd4jHW0NKm_tcSD7ID5cdfezTToSyuMYnv2193RsfINKA9yHLuyDpSjkOZxLChhFIgECPMgrY65Bw5bsbR26VqXcHyCzr2NSaZtBEysV.webp?r=c76",
						duration: "57m",
						description:
							"Ambitious gang leader Thomas Shelby recognizes an opportunity to move up in the world thanks to a missing crate of guns.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbmQ9vRwoUiJSm_5wWnXUJe5bWfj9Aal-Meu3ocndQq70mm-MpdH4YDsGUFVWa3SFWzekFVti9hyHag-H3E0PBCchMz3ptacbBlaNZYuPdpBOXfcXAnAr3-n.webp?r=c06",
						duration: "57m",
						description:
							"Thomas provokes a local kingpin by fixing a horse race and starts a war with a gypsy family; Inspector Campbell carries out a vicious raid.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSDBlWrDxT5Vzg-oECmGP0pJNftSC_ZFrPFKwY9mcxHicY27p0tdUreXq0vOlTKooVt4L2iCjVdF1LxgzEr1LDm5eCOnKkSs1FKw83K0qfo6C8cvghusL_63.webp?r=b69",
						duration: "55m",
						description:
							"As his war with the Lee family escalates, Thomas harbors suspicions about his brother's fiancée; Campbell pressures the gang to deliver the guns.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbjjeDyfNSIzeow80dL6qKI3_0ujAO7oK-BOs0lR4gdC_QC_PQBH0m4WIprNnshwOkiFTT55gfFdr93O6aPXiXgrGX-ZkaeQVwnWQbjnmh2y-OcchQEmRO8E.webp?r=753",
						duration: "58m",
						description:
							"As his war with the Lee family escalates, Thomas harbors suspicions about his brother's fiancée; Campbell pressures the gang to deliver the guns.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXA4tDpVRtZItVHKH_8LksvPX5CQPvLgwokvE4oELLjDkdsmdZuBd6I2OY6R1RSJNnjyeHjAhff0uQ2XAvYjbwYG57t57LdIAtUNr9I9Ja9ZkN6eqFK525fN.webp?r=a07",
						duration: "56m",
						description:
							"Thomas deals with an IRA chief bent on avenging his cousin's death; Grace must decide whether her loyalties lie with Campbell or Thomas.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWtM-d30zOOd2W8MFheYswFey6wXSmCknE7E6yAiNWTwxKPmhhjc--oAEJzzVYOiSFFclwDNY0Smu5yw_Gvq8Gv28S3BR9KCWAqd_kZ2JG0egHHBIP_XePj3.webp?r=e86",
						duration: "54m",
						description:
							"Thomas prepares to oust Billy Kimber from power, but family secrets that come to light and the obsessed Campbell may prove his undoing.",
					},
				],
			},
			{
				episodes: [
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXbOPYXMVjHhkpx5ZUjv026bNTatezSdL6fZ5V9Isdqo51Ug1pt92ml3hPrz_OHdyQcrjkFr8ch0fRdVcBd_H4J1u7Ll9Z5SYEwkqrGUU0P0VeQYpmqef8b3.webp?r=f51",
						duration: "59m",
						description:
							"When Birmingham crime boss Tommy Shelby's beloved Garrison pub is bombed, he finds himself blackmailed into murdering an Irish dissident.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQm1AGY5HMu_7PHQZ-k3spCV3ky7KvLwt06DRvMVYdaKnbnmvyYoNethvDz66hm9KbfDB20c1X1lj3AFmdruT7igbgcAn1tG3Pn4Y23aZndx1DFztVr43OjV.webp?r=5a6",
						duration: "57m",
						description:
							"After murdering an Irish dissident, Tommy has no choice but to be a pawn in Inspector Campbell's treacherous political game.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZKvDTT8R9VRNZCT6ak786Khtbz29KgZW-xB8Q1JZVj_1OCJrF22yEiwwByMy7P8Hxl0BN5GyYAIe1Rhof49SyOWtRPq7gTzt7Ita-xMZNm9_m29G47sinD5.webp?r=a44",
						duration: "58m",
						description:
							"After joining London crime boss Alfie Solomons in a business venture, Tommy worries that Alfie's newly revealed volatility could pose a problem.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABckq7RYfjIrw3sWQoUjaJuGC3Jp_viDZC8obzX4563MHRSPJF-KUzIPm88t-Xz16oDp7HMCRfnXhy4G6U0TzPUC63piCyjB_Ppi3JkoP0c2RCG9SdKrv6fRJ.webp?r=fba",
						duration: "57m",
						description:
							"The Peaky Blinders take over London's Eden Club; Sabini convinces his old adversary Alfie Solomons to join forces and eradicate the gang.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdzkzfu3plULSDiuyL2KASohL8uuie4IiEDxJtN8PtVEo10BHz4SUb0N9vEKyVMLVxWzmdTGaph6BbmlvXBpeDWi6sTbTD_M-ngIthCUgQgdSDQ9kTdqgfjB.webp?r=63b",
						duration: "58m",
						description:
							"The Peaky Blinders are under attack. Tommy's power base in London is obliterated, and both Arthur and Michael are arrested and imprisoned.",
					},
					{
						name: "Point Three Percent",
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbr5T4sgzlOpqWQRaHyKZBgfuJdnp0syC5EAuopN3aQ3greGmdo07Rlo-ZF4nOGPR5ENwd4_9kvObBplfkK_XN78sBe8dHqEL28e4OKx1rXS1dURfnaY5Ion.webp?r=856",
						duration: "58m",
						description:
							"Tommy plans to execute the mission given to him by Campbell: the assassination of a high-ranking member of the military establishment.",
					},
				],
			},
			{
				episodes: [
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABf0s9VjhkaHYc44v1bpQbyXNhsaFR_TRAg4H_m-Gsm72Mv1qNzTRohXyBbbp6e4YrELXrA5PWfL7wqeZUedpdqeqL8tsrDtg59UMqBWfwPPvQPK-hiR0F-Rx.webp?r=9cd",
						duration: "55m",
						description:
							"On Tommy's wedding day, a new business partner arranges a secret transaction. Arthur has found a godly woman, and Polly meets an attractive man.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSYeDS-5wX5OmuFPQWiCv_Ql8y0S9JXzJmWlDlNyKTHGTuUfWDmJmcLselJkObZLqodIuPio351Foa66euonNatVIudxGn5Mjnui_x-oGf2HkfZsC8ciJXoG.webp?r=58a",
						duration: "57m",
						description:
							"A careless threat sparks a war. Tommy gets a rare form of payment, but his bosses flex their power to keep him in line. Polly commissions a portrait.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABf0eG_5iYO4buy2aBbDy78sQmqc7ILUJ17keoDG83RtrDpoclejH8rgaHjgM8GNNEDBZGIgk5nwLPGowxpx-An4W8oGS43je0MvuguznNTr2j71fyfA6n7Pf.webp?r=18c",
						duration: "58m",
						description:
							"Tommy travels to Wales seeking absolution, and uncovers a traitor in the Economic League. Michael develops a taste for guns. Arthur gets good news.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbKHsKvtWhuRc0YBhPCFx911OJKwdt9Rg1-ObrXw4EzBQMcOK8K1c9bM-o6OYvzluB2TbKT2W5tJpu_CbF6S4bzZavWT9tazjh_Mk0NBmreQ-d1fTxA_8Aix.webp?r=73f",
						duration: "54m",
						description:
							"Polly goes to confession, igniting a chain of events that reveals a trap being laid at the Shelbys' expense. Tommy plans an exit from dirty business.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQUEqSSvnJWZiwxWxr3N6m6E50UYNwzEHMgEnkr4fwQpsOveVwSj6JLlyEdrEIL4GUMAFk4lia5QmAZnMh3VQ8eYpaXk671rEdfLtJn13rDT-nDfo19g6q_v.webp?r=9c7",
						duration: "57m",
						description:
							"Realizing he's being outmaneuvered by the Russians, Tommy seeks help from a former business partner. Polly's new friendship becomes something more.",
					},
					{
						name: "Point Three Percent",
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfwTTmPX8zWe-TGNngUrFsVozQXUKQVgpnuQxjtFEVyM9fibff8LiA1beqeGN3BzuWnYNRZ0pRYEl73ZZ5dABPDSbTTa--mWIZ-noU69PSSrgnbvhrFCS4bt.webp?r=249",
						duration: "57m",
						description:
							"As Tommy prepares to commit the most audacious crime of his career, an unexpected blow forces him to face his worst fears in a race against time.",
					},
				],
			},
		],
	},
	{
		title: "Peaky Blinders",
		creators: "Steven Knight",
		mainThambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABZjSulNvo8YvVKlTX5wxkS8gIDfIZVU_hKwGm1qdcBkt46D4_z2b12Gxd4WtJB20UHrDKbj6LsmAPQAlsamLc7oM5Q-0qAlDGB6iUzuEbCVmlSWbmYrOzGz-iaj0k6d0UFjGeg.jpg?r=0f1",
		thambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABT_uDyKx4UN-FkQeyfC7pgm0ER5wIFztIR2qDFKCYtsEJfYkr9sA7eu7iZyJFy2jOnsctY44NwFMCYzTYBGBoFXejiDk9nKPDO3n.webp?r=961",
		titleImage:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXATnou9lAifkkwnTkgHnTL843mPJnl8DvLJUNokZkepr5j3IOD75YzbJ956IRYAAVu_Aio8dxLB-iydkmmjoEM0XW9zeLyuEvlKcMi5r2FGeLrdlU1UyX3iLV-EBSkR9NG3iuHMvam8NOxOHc2s8EtmKwbwm8x8zn4mJSwSii0f9G1aeAvM.webp?r=f38",
		description:
			"A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost.",
		casts: ["Cillian Murphy", "Sam Neill", "Helen McCrory"],
		genres: ["TV Dramas", "British", "Period Pieses"],
		rating: [
			"gore",
			"language",
			"nudity",
			"sex",
			"substances",
			"suicide",
			"tobacco use",
			"violence",
		],
		seasons: [
			{
				episodes: [
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZGF2Q8Vlbz7Y_WCYd4jHW0NKm_tcSD7ID5cdfezTToSyuMYnv2193RsfINKA9yHLuyDpSjkOZxLChhFIgECPMgrY65Bw5bsbR26VqXcHyCzr2NSaZtBEysV.webp?r=c76",
						duration: "57m",
						description:
							"Ambitious gang leader Thomas Shelby recognizes an opportunity to move up in the world thanks to a missing crate of guns.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbmQ9vRwoUiJSm_5wWnXUJe5bWfj9Aal-Meu3ocndQq70mm-MpdH4YDsGUFVWa3SFWzekFVti9hyHag-H3E0PBCchMz3ptacbBlaNZYuPdpBOXfcXAnAr3-n.webp?r=c06",
						duration: "57m",
						description:
							"Thomas provokes a local kingpin by fixing a horse race and starts a war with a gypsy family; Inspector Campbell carries out a vicious raid.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSDBlWrDxT5Vzg-oECmGP0pJNftSC_ZFrPFKwY9mcxHicY27p0tdUreXq0vOlTKooVt4L2iCjVdF1LxgzEr1LDm5eCOnKkSs1FKw83K0qfo6C8cvghusL_63.webp?r=b69",
						duration: "55m",
						description:
							"As his war with the Lee family escalates, Thomas harbors suspicions about his brother's fiancée; Campbell pressures the gang to deliver the guns.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbjjeDyfNSIzeow80dL6qKI3_0ujAO7oK-BOs0lR4gdC_QC_PQBH0m4WIprNnshwOkiFTT55gfFdr93O6aPXiXgrGX-ZkaeQVwnWQbjnmh2y-OcchQEmRO8E.webp?r=753",
						duration: "58m",
						description:
							"As his war with the Lee family escalates, Thomas harbors suspicions about his brother's fiancée; Campbell pressures the gang to deliver the guns.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXA4tDpVRtZItVHKH_8LksvPX5CQPvLgwokvE4oELLjDkdsmdZuBd6I2OY6R1RSJNnjyeHjAhff0uQ2XAvYjbwYG57t57LdIAtUNr9I9Ja9ZkN6eqFK525fN.webp?r=a07",
						duration: "56m",
						description:
							"Thomas deals with an IRA chief bent on avenging his cousin's death; Grace must decide whether her loyalties lie with Campbell or Thomas.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWtM-d30zOOd2W8MFheYswFey6wXSmCknE7E6yAiNWTwxKPmhhjc--oAEJzzVYOiSFFclwDNY0Smu5yw_Gvq8Gv28S3BR9KCWAqd_kZ2JG0egHHBIP_XePj3.webp?r=e86",
						duration: "54m",
						description:
							"Thomas prepares to oust Billy Kimber from power, but family secrets that come to light and the obsessed Campbell may prove his undoing.",
					},
				],
			},
			{
				episodes: [
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXbOPYXMVjHhkpx5ZUjv026bNTatezSdL6fZ5V9Isdqo51Ug1pt92ml3hPrz_OHdyQcrjkFr8ch0fRdVcBd_H4J1u7Ll9Z5SYEwkqrGUU0P0VeQYpmqef8b3.webp?r=f51",
						duration: "59m",
						description:
							"When Birmingham crime boss Tommy Shelby's beloved Garrison pub is bombed, he finds himself blackmailed into murdering an Irish dissident.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQm1AGY5HMu_7PHQZ-k3spCV3ky7KvLwt06DRvMVYdaKnbnmvyYoNethvDz66hm9KbfDB20c1X1lj3AFmdruT7igbgcAn1tG3Pn4Y23aZndx1DFztVr43OjV.webp?r=5a6",
						duration: "57m",
						description:
							"After murdering an Irish dissident, Tommy has no choice but to be a pawn in Inspector Campbell's treacherous political game.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZKvDTT8R9VRNZCT6ak786Khtbz29KgZW-xB8Q1JZVj_1OCJrF22yEiwwByMy7P8Hxl0BN5GyYAIe1Rhof49SyOWtRPq7gTzt7Ita-xMZNm9_m29G47sinD5.webp?r=a44",
						duration: "58m",
						description:
							"After joining London crime boss Alfie Solomons in a business venture, Tommy worries that Alfie's newly revealed volatility could pose a problem.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABckq7RYfjIrw3sWQoUjaJuGC3Jp_viDZC8obzX4563MHRSPJF-KUzIPm88t-Xz16oDp7HMCRfnXhy4G6U0TzPUC63piCyjB_Ppi3JkoP0c2RCG9SdKrv6fRJ.webp?r=fba",
						duration: "57m",
						description:
							"The Peaky Blinders take over London's Eden Club; Sabini convinces his old adversary Alfie Solomons to join forces and eradicate the gang.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdzkzfu3plULSDiuyL2KASohL8uuie4IiEDxJtN8PtVEo10BHz4SUb0N9vEKyVMLVxWzmdTGaph6BbmlvXBpeDWi6sTbTD_M-ngIthCUgQgdSDQ9kTdqgfjB.webp?r=63b",
						duration: "58m",
						description:
							"The Peaky Blinders are under attack. Tommy's power base in London is obliterated, and both Arthur and Michael are arrested and imprisoned.",
					},
					{
						name: "Point Three Percent",
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbr5T4sgzlOpqWQRaHyKZBgfuJdnp0syC5EAuopN3aQ3greGmdo07Rlo-ZF4nOGPR5ENwd4_9kvObBplfkK_XN78sBe8dHqEL28e4OKx1rXS1dURfnaY5Ion.webp?r=856",
						duration: "58m",
						description:
							"Tommy plans to execute the mission given to him by Campbell: the assassination of a high-ranking member of the military establishment.",
					},
				],
			},
			{
				episodes: [
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABf0s9VjhkaHYc44v1bpQbyXNhsaFR_TRAg4H_m-Gsm72Mv1qNzTRohXyBbbp6e4YrELXrA5PWfL7wqeZUedpdqeqL8tsrDtg59UMqBWfwPPvQPK-hiR0F-Rx.webp?r=9cd",
						duration: "55m",
						description:
							"On Tommy's wedding day, a new business partner arranges a secret transaction. Arthur has found a godly woman, and Polly meets an attractive man.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSYeDS-5wX5OmuFPQWiCv_Ql8y0S9JXzJmWlDlNyKTHGTuUfWDmJmcLselJkObZLqodIuPio351Foa66euonNatVIudxGn5Mjnui_x-oGf2HkfZsC8ciJXoG.webp?r=58a",
						duration: "57m",
						description:
							"A careless threat sparks a war. Tommy gets a rare form of payment, but his bosses flex their power to keep him in line. Polly commissions a portrait.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABf0eG_5iYO4buy2aBbDy78sQmqc7ILUJ17keoDG83RtrDpoclejH8rgaHjgM8GNNEDBZGIgk5nwLPGowxpx-An4W8oGS43je0MvuguznNTr2j71fyfA6n7Pf.webp?r=18c",
						duration: "58m",
						description:
							"Tommy travels to Wales seeking absolution, and uncovers a traitor in the Economic League. Michael develops a taste for guns. Arthur gets good news.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbKHsKvtWhuRc0YBhPCFx911OJKwdt9Rg1-ObrXw4EzBQMcOK8K1c9bM-o6OYvzluB2TbKT2W5tJpu_CbF6S4bzZavWT9tazjh_Mk0NBmreQ-d1fTxA_8Aix.webp?r=73f",
						duration: "54m",
						description:
							"Polly goes to confession, igniting a chain of events that reveals a trap being laid at the Shelbys' expense. Tommy plans an exit from dirty business.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQUEqSSvnJWZiwxWxr3N6m6E50UYNwzEHMgEnkr4fwQpsOveVwSj6JLlyEdrEIL4GUMAFk4lia5QmAZnMh3VQ8eYpaXk671rEdfLtJn13rDT-nDfo19g6q_v.webp?r=9c7",
						duration: "57m",
						description:
							"Realizing he's being outmaneuvered by the Russians, Tommy seeks help from a former business partner. Polly's new friendship becomes something more.",
					},
					{
						name: "Point Three Percent",
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfwTTmPX8zWe-TGNngUrFsVozQXUKQVgpnuQxjtFEVyM9fibff8LiA1beqeGN3BzuWnYNRZ0pRYEl73ZZ5dABPDSbTTa--mWIZ-noU69PSSrgnbvhrFCS4bt.webp?r=249",
						duration: "57m",
						description:
							"As Tommy prepares to commit the most audacious crime of his career, an unexpected blow forces him to face his worst fears in a race against time.",
					},
				],
			},
		],
	},
	{
		title: "Peaky Blinders",
		creators: "Steven Knight",
		mainThambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABfRbq-3YbfkVgNP33528NaC7fPsVK4WKIHlu-5KVpxWl1-FbPqZzLyZc2-HbwQwa5eCFxc2eVB-y3zRJZFNK2d0Blyxz6A7oGY44UQaO0UeY14V7Icb3734ANLTBLXx44K94UA.jpg?r=f08",
		thambnail:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABT_uDyKx4UN-FkQeyfC7pgm0ER5wIFztIR2qDFKCYtsEJfYkr9sA7eu7iZyJFy2jOnsctY44NwFMCYzTYBGBoFXejiDk9nKPDO3n.webp?r=961",
		titleImage:
			"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXATnou9lAifkkwnTkgHnTL843mPJnl8DvLJUNokZkepr5j3IOD75YzbJ956IRYAAVu_Aio8dxLB-iydkmmjoEM0XW9zeLyuEvlKcMi5r2FGeLrdlU1UyX3iLV-EBSkR9NG3iuHMvam8NOxOHc2s8EtmKwbwm8x8zn4mJSwSii0f9G1aeAvM.webp?r=f38",
		description:
			"A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost.",
		casts: ["Cillian Murphy", "Sam Neill", "Helen McCrory"],
		genres: ["TV Dramas", "British", "Period Pieses"],
		rating: [
			"gore",
			"language",
			"nudity",
			"sex",
			"substances",
			"suicide",
			"tobacco use",
			"violence",
		],
		seasons: [
			{
				episodes: [
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZGF2Q8Vlbz7Y_WCYd4jHW0NKm_tcSD7ID5cdfezTToSyuMYnv2193RsfINKA9yHLuyDpSjkOZxLChhFIgECPMgrY65Bw5bsbR26VqXcHyCzr2NSaZtBEysV.webp?r=c76",
						duration: "57m",
						description:
							"Ambitious gang leader Thomas Shelby recognizes an opportunity to move up in the world thanks to a missing crate of guns.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbmQ9vRwoUiJSm_5wWnXUJe5bWfj9Aal-Meu3ocndQq70mm-MpdH4YDsGUFVWa3SFWzekFVti9hyHag-H3E0PBCchMz3ptacbBlaNZYuPdpBOXfcXAnAr3-n.webp?r=c06",
						duration: "57m",
						description:
							"Thomas provokes a local kingpin by fixing a horse race and starts a war with a gypsy family; Inspector Campbell carries out a vicious raid.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSDBlWrDxT5Vzg-oECmGP0pJNftSC_ZFrPFKwY9mcxHicY27p0tdUreXq0vOlTKooVt4L2iCjVdF1LxgzEr1LDm5eCOnKkSs1FKw83K0qfo6C8cvghusL_63.webp?r=b69",
						duration: "55m",
						description:
							"As his war with the Lee family escalates, Thomas harbors suspicions about his brother's fiancée; Campbell pressures the gang to deliver the guns.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbjjeDyfNSIzeow80dL6qKI3_0ujAO7oK-BOs0lR4gdC_QC_PQBH0m4WIprNnshwOkiFTT55gfFdr93O6aPXiXgrGX-ZkaeQVwnWQbjnmh2y-OcchQEmRO8E.webp?r=753",
						duration: "58m",
						description:
							"As his war with the Lee family escalates, Thomas harbors suspicions about his brother's fiancée; Campbell pressures the gang to deliver the guns.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXA4tDpVRtZItVHKH_8LksvPX5CQPvLgwokvE4oELLjDkdsmdZuBd6I2OY6R1RSJNnjyeHjAhff0uQ2XAvYjbwYG57t57LdIAtUNr9I9Ja9ZkN6eqFK525fN.webp?r=a07",
						duration: "56m",
						description:
							"Thomas deals with an IRA chief bent on avenging his cousin's death; Grace must decide whether her loyalties lie with Campbell or Thomas.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWtM-d30zOOd2W8MFheYswFey6wXSmCknE7E6yAiNWTwxKPmhhjc--oAEJzzVYOiSFFclwDNY0Smu5yw_Gvq8Gv28S3BR9KCWAqd_kZ2JG0egHHBIP_XePj3.webp?r=e86",
						duration: "54m",
						description:
							"Thomas prepares to oust Billy Kimber from power, but family secrets that come to light and the obsessed Campbell may prove his undoing.",
					},
				],
			},
			{
				episodes: [
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXbOPYXMVjHhkpx5ZUjv026bNTatezSdL6fZ5V9Isdqo51Ug1pt92ml3hPrz_OHdyQcrjkFr8ch0fRdVcBd_H4J1u7Ll9Z5SYEwkqrGUU0P0VeQYpmqef8b3.webp?r=f51",
						duration: "59m",
						description:
							"When Birmingham crime boss Tommy Shelby's beloved Garrison pub is bombed, he finds himself blackmailed into murdering an Irish dissident.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQm1AGY5HMu_7PHQZ-k3spCV3ky7KvLwt06DRvMVYdaKnbnmvyYoNethvDz66hm9KbfDB20c1X1lj3AFmdruT7igbgcAn1tG3Pn4Y23aZndx1DFztVr43OjV.webp?r=5a6",
						duration: "57m",
						description:
							"After murdering an Irish dissident, Tommy has no choice but to be a pawn in Inspector Campbell's treacherous political game.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZKvDTT8R9VRNZCT6ak786Khtbz29KgZW-xB8Q1JZVj_1OCJrF22yEiwwByMy7P8Hxl0BN5GyYAIe1Rhof49SyOWtRPq7gTzt7Ita-xMZNm9_m29G47sinD5.webp?r=a44",
						duration: "58m",
						description:
							"After joining London crime boss Alfie Solomons in a business venture, Tommy worries that Alfie's newly revealed volatility could pose a problem.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABckq7RYfjIrw3sWQoUjaJuGC3Jp_viDZC8obzX4563MHRSPJF-KUzIPm88t-Xz16oDp7HMCRfnXhy4G6U0TzPUC63piCyjB_Ppi3JkoP0c2RCG9SdKrv6fRJ.webp?r=fba",
						duration: "57m",
						description:
							"The Peaky Blinders take over London's Eden Club; Sabini convinces his old adversary Alfie Solomons to join forces and eradicate the gang.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdzkzfu3plULSDiuyL2KASohL8uuie4IiEDxJtN8PtVEo10BHz4SUb0N9vEKyVMLVxWzmdTGaph6BbmlvXBpeDWi6sTbTD_M-ngIthCUgQgdSDQ9kTdqgfjB.webp?r=63b",
						duration: "58m",
						description:
							"The Peaky Blinders are under attack. Tommy's power base in London is obliterated, and both Arthur and Michael are arrested and imprisoned.",
					},
					{
						name: "Point Three Percent",
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbr5T4sgzlOpqWQRaHyKZBgfuJdnp0syC5EAuopN3aQ3greGmdo07Rlo-ZF4nOGPR5ENwd4_9kvObBplfkK_XN78sBe8dHqEL28e4OKx1rXS1dURfnaY5Ion.webp?r=856",
						duration: "58m",
						description:
							"Tommy plans to execute the mission given to him by Campbell: the assassination of a high-ranking member of the military establishment.",
					},
				],
			},
			{
				episodes: [
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABf0s9VjhkaHYc44v1bpQbyXNhsaFR_TRAg4H_m-Gsm72Mv1qNzTRohXyBbbp6e4YrELXrA5PWfL7wqeZUedpdqeqL8tsrDtg59UMqBWfwPPvQPK-hiR0F-Rx.webp?r=9cd",
						duration: "55m",
						description:
							"On Tommy's wedding day, a new business partner arranges a secret transaction. Arthur has found a godly woman, and Polly meets an attractive man.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSYeDS-5wX5OmuFPQWiCv_Ql8y0S9JXzJmWlDlNyKTHGTuUfWDmJmcLselJkObZLqodIuPio351Foa66euonNatVIudxGn5Mjnui_x-oGf2HkfZsC8ciJXoG.webp?r=58a",
						duration: "57m",
						description:
							"A careless threat sparks a war. Tommy gets a rare form of payment, but his bosses flex their power to keep him in line. Polly commissions a portrait.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABf0eG_5iYO4buy2aBbDy78sQmqc7ILUJ17keoDG83RtrDpoclejH8rgaHjgM8GNNEDBZGIgk5nwLPGowxpx-An4W8oGS43je0MvuguznNTr2j71fyfA6n7Pf.webp?r=18c",
						duration: "58m",
						description:
							"Tommy travels to Wales seeking absolution, and uncovers a traitor in the Economic League. Michael develops a taste for guns. Arthur gets good news.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbKHsKvtWhuRc0YBhPCFx911OJKwdt9Rg1-ObrXw4EzBQMcOK8K1c9bM-o6OYvzluB2TbKT2W5tJpu_CbF6S4bzZavWT9tazjh_Mk0NBmreQ-d1fTxA_8Aix.webp?r=73f",
						duration: "54m",
						description:
							"Polly goes to confession, igniting a chain of events that reveals a trap being laid at the Shelbys' expense. Tommy plans an exit from dirty business.",
					},
					{
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQUEqSSvnJWZiwxWxr3N6m6E50UYNwzEHMgEnkr4fwQpsOveVwSj6JLlyEdrEIL4GUMAFk4lia5QmAZnMh3VQ8eYpaXk671rEdfLtJn13rDT-nDfo19g6q_v.webp?r=9c7",
						duration: "57m",
						description:
							"Realizing he's being outmaneuvered by the Russians, Tommy seeks help from a former business partner. Polly's new friendship becomes something more.",
					},
					{
						name: "Point Three Percent",
						thambnail:
							"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfwTTmPX8zWe-TGNngUrFsVozQXUKQVgpnuQxjtFEVyM9fibff8LiA1beqeGN3BzuWnYNRZ0pRYEl73ZZ5dABPDSbTTa--mWIZ-noU69PSSrgnbvhrFCS4bt.webp?r=249",
						duration: "57m",
						description:
							"As Tommy prepares to commit the most audacious crime of his career, an unexpected blow forces him to face his worst fears in a race against time.",
					},
				],
			},
		],
	},
];

export  {movies, shows}
