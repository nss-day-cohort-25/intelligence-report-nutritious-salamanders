const rapData = {}

rapData.rapsheet = []

rapData.rapsheet.push(
    {
        title: "Alleged Crimes", 
        value: [ " Racketeering ", " Murder ", " Possesion of Illegal Substance ", " Battery ", " Fleeing the Scene of a Crime " ],
    },
    {
        title: "Convictions", 
        value: [  " Attempted Murder" , " Possesion with Intent to Sell " , " Obstruction of Property ", " Tampering of Evidence " ],
    },
    {
        title: "Prisons", 
        value: [ " Mountjoy Prison, North Circular Road, Dublin 7. Time Served: 2 Years. " ,
         " Wheatfield Place of Detention , Cloverhill Road, Clondalkin, Dublin 22. Time Served: 6 Months. ", 
         " Arbour Hill Prison, Arbour Hill, Dublin 7. Time Served: 3 Years. ", 
         " Cork Prison Rathmore Road, Cork City, Cork. Time Served: 4 Months. " ],
    },
    {
        title: "Witnesses", 
        value: [ " Frank Ross ", " Patrick Harrington ", " Patrick O'Sugrue ", " Adine Caoimhe ", " Cael Donahue " ],
    },
    {
        title: "Victims",
        value: [ " Patches O'Hoolahan ", " Oliver O'Hanlon ", " Aria Sykes ", " Skeeter Bugs ", " Fauna O'Douls " ]
    }
)

localStorage.setItem("Rap_Database", JSON.stringify(rapData))
