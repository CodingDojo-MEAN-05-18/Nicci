def characterFind(array,character):
    for i in range(0,len(array)):
        for c in array[i]:  
            a = i
            # print a     
            if c == character:
                # print 'yes'
                print array[a]
                i = i + 1
characterFind(['nicci','bob','ray','maya'],'q')        
