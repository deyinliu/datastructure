#include "iostream"
#include "./main/base.h"
template <class T>
void fill(T *arr , int start , int end , const T value){ 
    for(int i = start; i < end; i++)
    {
        arr[i] = value;
    }   
}

int main(int argc, char const *argv[])
{
    int arr[] = {1,2,3,4,5,6,7,8};
    fill(arr,1,4,9);
    
    for(int i = 0; i < count(arr); i++)
    {
        printf("%d,",arr[i]);
    }
    printf("\n");
    
    return 0;
}
