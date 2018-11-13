#include "iostream"
#include "./main/base.h"
using namespace std;
template <class T>
bool is_sorted(T *array , int n){
    int increase = 0;
    int descend = 0;
    for (int j = 0; j < n-1; j++) {
        if(array[j]>array[j+1]){
            increase = 1;
            break;
        }
    }
    
    for(int i = 0; i < n-1; i++)
    {
        if (array[i]<array[i+1]) {
            descend = 1;
            break;
        }  
    }
    
    if (increase==0 || descend==0) {
        return true;
    }
    else {
        return false;
    }
    
}

int main(int argc, char const *argv[])
{
    int arr[] = {1,2,3,2,4,5};
    bool isSorted = is_sorted(arr , count(arr));
    cout <<isSorted<<endl;
    cout <<isSorted<<endl;
    return 0;
}
