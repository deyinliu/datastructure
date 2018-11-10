#include "iostream"
#include "./main/base.h"
template <class T>
void iota(T *a , int n , const T& value){
    
    for(int i = 0; i < n; i++)
    {
        a[i] = value + i;
    }
    
}

int main(int argc, char const *argv[])
{
    int a[] = {1,2,3,4,5,6,7,8,9};
    int value = 9;
    iota(a , 5 , value);
    for(int i = 0; i<count(a); i++){
        printf("%d," , a[i]);
    }
    printf("\n");
    return 0;
}
