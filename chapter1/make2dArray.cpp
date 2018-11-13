#include "iostream"
#include "./main/base.h"
using namespace std;

template <class T>
bool make2dArray(T** &x , int rows , T rowSize[]){
    try{
        x = new T* [rows];
        int cols = count(rowSize);
        for(int i = 0; i<rows ; i++){
            x[i] = new T[cols];
        }
        return true;
    }catch(bad_alloc){
        return false;
    }
    return false;
}

int main(int argc, char const *argv[]){
    int **x;
    int rows = 3;
    int rowSize[] = {6,5,4,3,2,1};
    int cols = count(rowSize);
    if(make2dArray(x , rows , rowSize)){
        cout<< 1 << endl;
    }else{
        cout<< 0 <<endl;
    }
    for(int i = 0; i<rows; i++){
        for(int j = 0; j<cols; j++){
            x[i][j] = i*j;
        }
    }
    cout << x[2][5] <<endl;
    return 0;
}